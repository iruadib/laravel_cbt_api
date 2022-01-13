<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Support\Str;
use App\Models\User;
use Cookie;

class AuthController extends Controller
{
  public function register(Request $request) {
    $validator = Validator::make($request->all(),[
      'name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:users',
      'password' => 'required|string|min:8'
    ]);

    if($validator->fails()){
      return response()->json($validator->messages(), 400);       
    }

    $user = User::create([
      'uuid' => (string) Str::uuid(),
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password, ['rounds'=>12])
   ]);

    $token = $user->createToken('auth_token')->plainTextToken;
    $cookie = Cookie::make('user_id', $user->uuid, 60 * 24 * 1, null, null, null, true, false, 'Strict');
    return response()->json(['id' => $user->uuid, 'access_token' => $token, 'token_type' => 'Bearer'], 200)->withCookie($cookie);
  }
  public function login(Request $request) {
    $validator = Validator::make($request->all(),[
      'email' => 'required|string|email|max:255',
      'password' => 'required|string|min:8'
    ]);

    if($validator->fails()){
      return response()->json($validator->messages(), 400);       
    }

    $user = User::where('email', $request->email)->first();
    if (!$user || !Hash::check($request->password, $user->password)) {
      return response()->json(['message'=>'Unauthorized!'], 401);
    }
    $token = $user->createToken('auth_token')->plainTextToken;
    $cookie = Cookie::make('user_id', $user->uuid, 60 * 24 * 1, null, null, null, true, false, 'Strict');
    return response()->json(['id' => $user->uuid, 'access_token' => $token, 'token_type' => 'Bearer'])->withCookie($cookie);
  }

  public function logout() {
    auth()->user()->tokens()->delete();
    Cookie::queue(Cookie::forget('user_id'));
    return [
        'message' => 'You have successfully logged out and the token was successfully deleted'
    ];
  }

  public function check() {
    return auth()->user();
  }
}
