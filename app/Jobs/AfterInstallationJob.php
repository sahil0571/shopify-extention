<?php

namespace App\Jobs;

use App\Models\Setting;
use App\Models\Settings;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class AfterInstallationJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $shopDomain;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($shopDomain)
    {
        $this->shopDomain = $shopDomain;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        logger('...........................................installation successfull.............................................');
        $user = $this->shopDomain;
        // logger($user);
        $eventData = [
            'track_Product_details_page_view' => true,
            'track_Product_details_page_view_homepage' => false,
            'track_add_to_cart' => true,
            'track_initiate_checkout' => true,
            'track_complate_payment' => true,
            'track_order_value_currency' => false,
        ];

        $settings = Settings::where('user_id', $user->id)->first();
        if (!$settings) {
            $settings = new Settings();
            $settings->tracking_status = false;
            $settings->pixel_code = '';
            $settings->event_settings = json_encode($eventData);
            $settings->user_id = $user->id;
            $settings->tutorial = true;
            $settings->save();
        }
        ThemeVerifyJob::dispatch($user);
    }
}
