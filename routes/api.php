<?php

use App\Http\Controllers\Api\SettingsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/get-settings/{shop}', [SettingsController::class , 'index'])->name('api.get-settings')->middleware('cors');


Route::get('/get-theme', [SettingsController::class , 'getTheme'])->middleware(['verify.shopify','secure.headers'])->name('theme.id');
    