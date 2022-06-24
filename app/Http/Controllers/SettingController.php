<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingController extends Controller
{
    public function index()
    {
        try {

            $settings = Settings::where('user_id', Auth::user()->id)->first();
            if ($settings) {
                $settingsData = [];
                $eventData = json_decode($settings->event_settings);

                $settingsData['pixel_tracking_enabled'] = $settings->tracking_status == 1 ? true : false;
                $settingsData['pixel_code'] = $settings->pixel_code;
                $settingsData['track_Product_details_page_view'] = $eventData->track_Product_details_page_view;
                $settingsData['track_Product_details_page_view_homepage'] = $eventData->track_Product_details_page_view_homepage;
                $settingsData['track_add_to_cart'] = $eventData->track_add_to_cart;
                $settingsData['track_initiate_checkout'] = $eventData->track_initiate_checkout;
                $settingsData['track_complate_payment'] = $eventData->track_complate_payment;
                $settingsData['track_order_value_currency'] = $eventData->track_order_value_currency;
                $settingsData['tiktokId'] = $settings->pixel_id;
                $settingsData['tutorial'] = $settings->tutorial;

                return response()->json([
                    'success' => true,
                    'data' => $settingsData,
                    'shopName' => Auth::user()->name
                ], 200);
                return;
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Data not Found'
                ], 200);
            }
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'success' => false,
                'message' => $th->getMessage()
            ], 422);
        }
    }

    public function saveData(Request $request)
    {
        try {
            $user = Auth::user();

            if($request->pixel_tracking_enabled == true && ($request->pixel_code == null || $request->pixel_code == '')){
                return response()->json([
                    "success" => false,
                    "message" => "Pixel Code is empty."
                ],200);
            }else if(!str_contains($request->pixel_code,'<script>') && !str_contains($request->pixel_code,'</script>')){
                return response()->json([
                    "success" => false,
                    "message" => "The Pixel Code field must contain a valid script tag!."
                ],200);
            }

            if ($user) {
                $settings = Settings::where('user_id', $user->id)->first();
                if ($settings) {
                    $tute = false;
                    if($settings->tutorial == true){
                        $tute = true;
                    }

                    $eventData = [
                        'track_Product_details_page_view' => $request->track_Product_details_page_view,
                        'track_Product_details_page_view_homepage' => $request->track_Product_details_page_view_homepage,
                        'track_add_to_cart' => $request->track_add_to_cart,
                        'track_initiate_checkout' => $request->track_initiate_checkout,
                        'track_complate_payment' => $request->track_complate_payment,
                        'track_order_value_currency' => $request->track_order_value_currency,
                    ];

                    $settings->tracking_status = $request->pixel_tracking_enabled;
                    $settings->pixel_code = $request->pixel_code;
                    $settings->event_settings = json_encode($eventData);
                    $settings->pixel_id = '';
                    $settings->tutorial = false;
                    $conf = $settings->save();

                    if($conf){
                        return response()->json([
                            "success" => true,
                            "message" => "Data updated successfully.",
                            'tutorial' => $tute
                        ],200);
                    }else{
                        return response()->json([
                            "success" => false,
                            "message" => "Something went wrong."
                        ],200);
                    }
                }
            }
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => $th->getMessage()
            ], 422);
        }
    }

    public function removePixelCode(){
        try {
            
            $settings = Settings::where('user_id', Auth::user()->id)->first();
            if ($settings) {
                $settings->tracking_status = false;
                $settings->pixel_code = '';
                $settings->tutorial = true;
                $settings->save();

                return response()->json([
                    "success" => true,
                    "message" => "The pixel code has been successfully removed from the theme files."
                ],200);
            }

        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => $th->getMessage()
            ], 422);
        }
    }

}
