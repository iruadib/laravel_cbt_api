<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\FileUpload;
use App\Http\Controllers\API\ProfileController;

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

Route::post('signup', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login'])->name('login');

Route::get('file/{file}', [FileUpload::class, 'index']);

Route::middleware(['auth:sanctum'])->group(function() {
  Route::post('logout', [AuthController::class, 'logout']);
  Route::get('auth', [AuthController::class, 'check']);

  Route::post('upload', [FileUpload::class, 'store']);
  Route::get('view', [FileUpload::class, 'view']);
  Route::delete('file', [FileUpload::class, 'delete']);
  Route::put('file', [FileUpload::class, 'update']);

  Route::post('profile', [ProfileController::class, 'create']);
  Route::get('profile', [ProfileController::class, 'index']);
  Route::delete('profile', [ProfileController::class, 'destroy']);
});