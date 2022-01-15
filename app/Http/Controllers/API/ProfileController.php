<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Profile;
use Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\User;
use Carbon\Carbon;

class ProfileController extends Controller
{
  public function index(Request $request) {
    $id = $request->cookie('user_id');
    if (isset($id)) {
      $user = User::where('uuid', $id)->first();
      if (!$user) {
        return response()->json(['message'=>'Unauthorized!'], 401);
      }
      $image = Profile::where('owner_id', $user->uuid)->first();
      if (!$image) {
        return response()->json(['message'=>'You didn\'t post any image!', 'name' => $user->name], 404);
      }
      return response()->json(['message'=>$image->title, 'name' => $user->name]);
    }
    return response()->json(['message'=>'Unauthorized!'], 401);
  }
  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create(Request $request) {
    $validator = Validator::make($request->all(), [
      'profile' => 'required|mimes:jpeg,png,jpg,svg,tiff,bmp,gif|max:4096'
    ]);
    if ($validator->fails()) {
      return response()->json($validator->messages(), 400);
    }
    $id = $request->cookie('user_id');
    if (isset($id)) {
      $user = User::where('uuid', $id)->first();
      if (!$user) {
        return response()->json(['message'=>'Unauthorized!'], 401);
      }
      $image = $request->file('profile');
      if ($request->hasFile('profile')) {
        $findFile = Profile::where('owner_id', $user->uuid)->first();
        $randomName = Str::random(15);
        $secondRandom = Str::random(20);
        $date = Carbon::now()->getTimestampMs();
        if (!$findFile) {
          $file = Profile::Create([
            'title' => $randomName.$date.$secondRandom.'.'.$request->file('profile')->extension(),
            'owner' => $user->name,
            'owner_id' => $user->uuid,
            'ext' => $request->file('profile')->extension(),
          ]);
          $path = $image->storeAs('public/profile', $randomName.$date.$secondRandom.'.'.$request->file('profile')->extension());
          return response()->json(['message'=> $randomName.$date.$secondRandom.'.'.$request->file('profile')->extension()], 200);
        } else {
          return response()->json(['profile'=>['Please delete your profile picture first!']], 400);
        }
      }
    }
    return $request->all();
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Profile  $photo
   * @return \Illuminate\Http\Response
   */
  public function destroy(Request $request) {
    $id = $request->cookie('user_id');
    if (isset($id)) {
      $user = User::where('uuid', $id)->first();
      if (!$user) {
        return response()->json(['message'=>'Unauthorized!'], 401);
      }
      $image = Profile::where('owner_id', $user->uuid)->first();
      if (!$image) {
        return response()->json(['message'=>'You didn\'t post any image!'], 404);
      }
      $delete = Profile::where('owner_id', $user->uuid)->delete();
      Storage::disk('public')->delete('profile/'.$image->title);
      return response()->json(['message'=>'Image has been deleted!']);
    }
    return response()->json(['message'=>'Unauthorized!'], 401);
  }
}
