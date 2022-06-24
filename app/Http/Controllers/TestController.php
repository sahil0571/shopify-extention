<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\ThemeCheck;

class TestController extends Controller
{

    use ThemeCheck;
    protected $user;

    public function testFunc(){
        try {
            
            $this->user = User::find(2);

            $res = $this->user->api()->rest('GET','/admin/api/themes.json');

            $themeId = null;
            if(!$res['errors']){
                $allThemes = $res['body']->themes;
                foreach($allThemes as $theme){
                    if($theme['role'] == 'main'){
                        $themeId = $theme->id;
                    }
                }
            }

            return response()->json([
                "success" => true,
                "themeId" => $themeId
            ],200);
            
            return($res);

            // $appBlocks = explode(',',env('SHOPIFY_APP_BLOCK_TEMPLATES', ''));
            // $res = $this->scriptTagShouldBeEnabled($appBlocks);
            // if($res){
            //     return 'make script tags';
            // }else{
            //     return 'app extentions';
            // }

        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
