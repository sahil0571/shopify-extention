<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Settings;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingsController extends Controller
{
    public function index($shop)
    {
        try {
            $user = User::where('name', $shop)->first();
            if ($user) {
                $settings = Settings::where('user_id', $user->id)->first();
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
                        'data' => $settingsData
                    ], 200);
                } else {
                    return response()->json([
                        'success' => false,
                        'message' => 'Data not Found'
                    ], 200);
                }
            }
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'success' => false,
                'message' => $th->getMessage()
            ], 422);
        }
    }

    public function script(Request $request)
    {
        try {

            // dd($request->shop);
            $user = User::where('name', $request->shop)->first();
            if ($user) {
                $settings = Settings::where('user_id', $user->id)->first();
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

                    $id = strpos($settings->pixel_code, "ttq.load('", 0);
                    $id = substr($settings->pixel_code, $id);
                    $id = strtok($id, ';');
                    $id = str_replace("ttq.load('", '', $id);
                    $id = str_replace("')", '', $id);
                    $settingsData['p_id'] = $id;

                    return response()->view('scripts.tikpix', ['settingsData' => $settingsData, 'shopName' => $request->shop])->header('Content-Type', 'application/javascript');
                }
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getTheme()
    {
        try {

            $user = Auth::user();
            $res = $user->api()->rest('GET', '/admin/api/themes.json');

            $themeId = null;
            if (!$res['errors']) {
                $allThemes = $res['body']->themes;
                foreach ($allThemes as $theme) {
                    if ($theme['role'] == 'main') {
                        $themeId = $theme->id;
                    }
                }
            }

            return response()->json([
                "success" => true,
                "themeId" => $themeId
            ], 200);
        } catch (\Throwable $th) {
            logger('Error :: ' . json_encode($th->getMessage()));
            return response()->json([
                "success" => false,
                "data" => []
            ], 422);
        }
    }
}
