<?php

use App\Http\Controllers\Api\SettingsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('app');
})->where('any', '.*')->middleware(['verify.shopify','secure.headers'])->name('home');

Route::get('/get-settings',[SettingController::class , 'index'])->middleware(['verify.shopify','secure.headers'])->name('get_settings');
Route::post('/save-settings',[SettingController::class , 'saveData'])->middleware(['verify.shopify','secure.headers'])->name('saveData');
Route::post('/remove-pixel',[SettingController::class , 'removePixelCode'])->middleware(['verify.shopify','secure.headers'])->name('removePixelCode');

Route::get('/login',[AuthController::class , 'index']);

Route::get('/getscript',[SettingsController::class , 'script']);

Route::get('flush', function () {
    request()->session()->flush();
});

Route::get('/test',[TestController::class , 'testFunc']);