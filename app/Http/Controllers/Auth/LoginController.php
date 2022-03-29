<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{

    public function logout(){
        Auth::logout();
        Session::flush();
        return response()->json(["status"=>"success"]);
    }

    public function login(){
        $params = [
            'client_id' => config('app.vk.app_id'),
            'redirect_uri' => config('app.vk.redirect_uri'),
            'response_type' => 'code',
            'display'=>'page',
            'v'=> config('app.vk.version')
        ];
        return response()->redirectTo('http://oauth.vk.com/authorize?' . urldecode(http_build_query($params)));
    }

    public function auth(){

        if(\Illuminate\Support\Facades\Request::has('code')){
            $params = [
                'client_id' => config('app.vk.app_id'),
                'client_secret' => config('app.vk.app_secret'),
                'code' => \Illuminate\Support\Facades\Request::input('code'),
                'redirect_uri' => config('app.vk.redirect_uri')
            ];

            $token = json_decode(file_get_contents('https://oauth.vk.com/access_token' . '?' . urldecode(http_build_query($params))), true);
            if (isset($token['access_token'])) {
                $params = [
                    'user_ids' => $token['user_id'],
                    'fields' => 'id,first_name,last_name,screen_name,photo_max_orig',
                    'access_token' => $token['access_token'],
                    'v' => config('app.vk.version')];

                $userInfo = json_decode(file_get_contents('https://api.vk.com/method/users.get' . '?' . urldecode(http_build_query($params))), true);
                if (isset($userInfo['response'][0]['id'])) {
                    $userInfo = $userInfo['response'][0];
                    $user = User::query()->where('vk_id','=',$userInfo['id'])->first();

                    if($user === null){
                        $user = new User;
                        $user->vk_id      = $userInfo['id'];
                        $user->first_name = $userInfo['first_name'];
                        $user->last_name  = $userInfo['last_name'];
                        $user->avatar     = $userInfo['photo_max_orig'];
                        $user->save();
                    }
                    Auth::login($user);

                    return response()->json(['status'=>'success']);
                }
                else{
                    return response()->json(['status'=>'error','data'=>'Невозможно получить информацию о пользователе!']);
                }
            }
            else {
                return response()->json(['status'=>'error','data'=>'Невозможно получить токен доступа пользователя!']);
            }
        }
        else{
            return response()->json(['status'=>'error','data'=>'VK не вернуло код!']);
        }
    }
}
