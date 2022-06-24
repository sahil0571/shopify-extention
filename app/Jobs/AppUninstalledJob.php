<?php

namespace App\Jobs;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Osiset\ShopifyApp\Objects\Values\ShopDomain;
use stdClass;

class AppUninstalledJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $shopDomain;
    public $data;

    public function __construct($shopDomain, $data)
    {
        $this->shopDomain = $shopDomain;
        $this->data = $data;
    }

    public function handle()
    {
        // Convert domain
        logger($this->shopDomain);
        // $this->shopDomain = ShopDomain::fromNative($this->shopDomain);
        
        logger('deleted');
        $user = User::where('name' , $this->shopDomain)->first();
        $user->password = '';
        $user->deleted_at = Carbon::now();
        $user->plan_id = null;
        $user->save();
        logger('deleted ');
        
        $user->delete();
        logger('deleted done');
    }

}
