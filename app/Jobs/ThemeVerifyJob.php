<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use App\Models\User;
use App\Traits\ThemeCheck;

class ThemeVerifyJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use ThemeCheck;

    protected $user;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        logger('Theme verify job called');
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $user = $this->user;
        // logger(json_encode($user));

        $appBlocks = explode(',', env('SHOPIFY_APP_BLOCK_TEMPLATES', ''));
        $res = $this->scriptTagShouldBeEnabled($appBlocks);
        if ($res) {
            logger('make script tags');
            $data = [
                "script_tag" => [
                    "event" => "onload",
                    "src" => env('APP_URL') . '/getscript?shop=' . $user->name,
                    "link" => env('APP_URL') . '/getscript?shop=' . $user->name,
                    "display_scope" => "online_store",
                ]
            ];

            $res = $user->api()->rest('POST', '/admin/api/script_tags.json', $data);
            // logger(json_encode($res));

            $data = [
                "script_tag" => [
                    "event" => "onload",
                    "src" => env('APP_URL') . '/getscript?shop=' . $user->name,
                    "link" => env('APP_URL') . '/getscript?shop=' . $user->name,
                    "display_scope" => "order_status",
                ]
            ];

            $res = $user->api()->rest('POST', '/admin/api/script_tags.json', $data);
            // logger(json_encode($res));

        } else {
            logger('app extentions');
            $data = [
                "script_tag" => [
                    "event" => "onload",
                    "src" => env('APP_URL') . '/getscript?shop=' . $user->name,
                    "link" => env('APP_URL') . '/getscript?shop=' . $user->name,
                    "display_scope" => "order_status",
                ]
            ];

            $res = $user->api()->rest('POST', '/admin/api/script_tags.json', $data);
        }
    }
}
