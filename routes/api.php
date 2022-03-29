<?php


namespace App\Http\Controllers\Auth\LoginController;

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


Route::post('/logout', 'App\Http\Controllers\Auth\LoginController@logot');

Route::get('/login/vk', 'App\Http\Controllers\Auth\LoginController@login');

Route::get('/auth','App\Http\Controllers\Auth\LoginController@auth');

Route::get('/user',function (){
    return response()->json(\Illuminate\Support\Facades\Auth::user());
})->middleware('auth.json');
