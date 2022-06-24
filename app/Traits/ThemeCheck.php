<?php

namespace App\Traits;

use App\Models\User;
use Osiset\BasicShopifyAPI\ResponseAccess;
use Osiset\ShopifyApp\Exceptions\ApiException;

trait ThemeCheck
{

    protected $user;

    protected function doRequest($method, string $path, array $payload = null)
    {
        try {
            $user = $this->user;
            $response = $user->api()->rest($method, $path, $payload);

            if ($response['errors'] === true) {
                throw new ApiException(
                    is_string($response['body']) ? $response['body'] : 'Unknown error',
                    0,
                    $response['exception']
                );
            }
            return $response;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getThemes(array $params = []): ResponseAccess
    {
        // Setup the params
        $reqParams = array_merge(
            [
                'limit' => 250,
                'fields' => 'id,role',
            ],
            $params
        );

        // Fire the request
        $response = $this->doRequest(
            'GET',
            '/admin/themes.json',
            $reqParams
        );

        return $response['body']['themes'];
    }

    /**
     * {@inheritdoc}
     */

    public function scriptTagShouldBeEnabled(array $app_block_templates = [], array $params = []): bool
    {

        if (count($app_block_templates) > 0) {

            $themes = $this->getThemes();
            $published_theme = null;
            $templateJSONFiles = [];
            $sectionsWithAppBlock = [];
            $main = false;
            $templateMainSections = [];
            if (count($themes) !== 0) {
                foreach ($themes as $theme) {
                    if ($theme['role'] === 'main') {
                        $published_theme = $theme['id'];
                    }
                }
            }

            if (!is_null($published_theme)) {
                // Setup the params
                $reqParams = array_merge(
                    [
                        'fields' => 'key',
                    ],
                    $params
                );

                // Fire the request
                $response = $this->doRequest(
                    'GET',
                    "/admin/themes/{$published_theme}/assets.json",
                    $reqParams
                );


                $assets = $response['body']['assets'];

                if (count($assets) > 0) {
                    foreach ($assets as $asset) {

                        foreach ($app_block_templates as $template) {

                            $trimmedTemplate = trim($template);

                            if ($asset['key'] === "templates/{$trimmedTemplate}.json") {

                                $templateJSONFiles[] = $asset['key'];
                            }
                        }
                    }

                    if (count($templateJSONFiles) == count($app_block_templates)) {
                        foreach ($templateJSONFiles as $file) {
                            $acceptsAppBlock = false;
                            $reqParams = array_merge(
                                [
                                    'fields' => 'value',
                                ],
                                ['asset[key]' => $file]
                            );

                            // Fire the request
                            $response = $this->doRequest(
                                'GET',
                                "/admin/themes/{$published_theme}/assets.json",
                                $reqParams
                            );

                            $asset = $response['body']['asset'];

                            $json = json_decode($asset['value'], true);
                            $query = 'main-';

                            if (array_key_exists('sections', (array)$json) && count($json['sections']) > 0) {
                                foreach ($json['sections'] as $key => $value) {
                                    if ($key === 'main' || substr($value['type'], 0, strlen($query)) === $query) {
                                        $main = $value;
                                        break;
                                    }
                                }
                            }

                            if ($main) {
                                $mainType = $main['type'];
                                if (count($assets) > 0) {
                                    foreach ($assets as $asset) {
                                        if ($asset['key'] === "sections/{$mainType}.liquid") {
                                            $templateMainSections[] = $asset['key'];
                                        }
                                    }
                                }
                            }
                        }

                        if (count($templateMainSections) > 0) {
                            $templateMainSections = array_unique($templateMainSections);
                            foreach ($templateMainSections as $templateSection) {
                                $acceptsAppBlock = false;
                                $reqParams = array_merge(
                                    [
                                        'fields' => 'value',
                                    ],
                                    ['asset[key]' => $templateSection]
                                );

                                // Fire the request
                                $response = $this->doRequest(
                                    'GET',
                                    "/admin/themes/{$published_theme}/assets.json",
                                    $reqParams
                                );
                                $asset = $response['body']['asset'];

                                $match = preg_match('/\{\%\s+schema\s+\%\}([\s\S]*?)\{\%\s+endschema\s+\%\}/m', $asset['value'], $matches);

                                $schema = json_decode($matches[1], true);

                                if ($schema && array_key_exists('blocks', $schema)) {
                                    foreach ($schema['blocks'] as $block) {
                                        if (array_key_exists('type', (array)$block) && $block['type'] === '@app') {
                                            $acceptsAppBlock = true;
                                        }
                                    }
                                    //   $acceptsAppBlock = .some((b => b.type === '@app'));
                                }
                                $acceptsAppBlock ? array_push($sectionsWithAppBlock, $templateSection) : null;
                            }
                        }
                    }



                    if (count($sectionsWithAppBlock) > 0  && count($sectionsWithAppBlock) === count($templateJSONFiles)) {
                        return false;
                    }

                    if (count($sectionsWithAppBlock) > 0) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}
