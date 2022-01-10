<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Validator;
use App\Models\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
use App\Models\User;

class FileUpload extends Controller
{
  public function index(Request $request, $file) {
    $id = $request->cookie('user_id');
    if (isset($id)) {
      $user = User::where('uuid', $id)->first();
      if (!$user) {
        return response()->json(['message' => 'Unauthorized!'], 401);
      }
      $fileName = File::where('title', $file)->first();
      if (!$fileName) {
        return response()->json(['message'=>'Not Found!'], 404);
      }
      if (Storage::disk('local')->exists('/private'.'/'.$fileName->title)) {
        $file = Storage::disk('local')->get('/private'.'/'.$fileName->title);
        $type = Storage::disk('local')->mimeType('/private'.'/'.$fileName->title);
  
        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
  
        return $response;
      }
      return response()->json(['message'=>'Not Found!'], 404);
    }
    
    return response()->json(['message' => 'Unauthorized!'], 401);
  }
  public function view(Request $request) {
    $skip = $request->get('skip', 5);
    $page = $request->get('page', 0);
    $id = $request->cookie('user_id');
    if (isset($id)) {
      $user = User::where('uuid', $id)->first();
      if (!$user) {
        return response()->json(['message' => 'Unauthorized!'], 401);
      }
      return File::latest()->skip($skip * $page)->take($skip)->get();
    }
    return response()->json(['message' => 'Unauthorized!'], 401);
  }
  public function store(Request $request) {
    $validator = Validator::make($request->all(), [
      'file-1' => 'required|mimes:jpeg,png,jpg,svg,tiff,bmp,gif,pdf,docx',
      'file-2' => 'mimes:jpeg,png,jpg,svg,tiff,bmp,gif,pdf,docx',
      'file-3' => 'mimes:jpeg,png,jpg,svg,tiff,bmp,gif,pdf,docx',
    ]);
    if ($validator->fails()) {
      return response()->json(['message' => 'You must select at least one file!'], 400);
    }
    $id = $request->cookie('user_id');
    if (isset($id)) {
      $user = User::where('uuid', $id)->first();
      if (!$user) {
        return response()->json(['message' => 'Unauthorized!'], 401);
      }
      $firstFile = $request->file('file-1');
      if ($request->hasFile('file-1')) {
        $firstFileName = pathinfo($request->file('file-1')->getClientOriginalName(), PATHINFO_FILENAME);
        $findFirstFile = File::where('name', $firstFileName)->first();
        if (!$findFirstFile) {
          $file = File::Create([
            'title' => $request->file('file-1')->hashName(),
            'name' => $firstFileName,
            'owner' => $user->name,
            'owner_id' => $user->uuid,
            'ext' => $request->file('file-1')->extension(),
          ]);
          $path = $request->file('file-1')->storeAs('private', $request->file('file-1')->hashName());
        } else {
          return response()->json(['message'=>'First file already exists, therefore the second and third file might not be saved!'], 400);
        }
        $secondFile = $request->file('file-2');
        if ($request->hasFile('file-2')) {
          $secondFileName = pathinfo($request->file('file-2')->getClientOriginalName(), PATHINFO_FILENAME);
          $findSecondFile = File::where('title', $secondFileName)->first();
          if (!$findSecondFile) {
            $file = File::Create([
              'title' => $request->file('file-2')->hashName(),
              'name'=> $secondFileName,
              'owner' => $user->name,
              'owner_id' => $user->uuid,
              'ext' => $request->file('file-2')->extension(),
            ]);
            $path = $request->file('file-2')->storeAs('private', $request->file('file-2')->hashName());
          } else {
            return response()->json(['message'=>'Second file already exists and the third file might not be saved!'], 400);
          }

          $thirdFile = $request->file('file-3');
          if ($request->hasFIle('file-3')) {
            $thirdFileName = pathinfo($request->file('file-3')->getClientOriginalName(), PATHINFO_FILENAME);
            $findThirdFile = File::where('title', $request->file('file-3')->getClientOriginalName())->first();
            if (!$findThirdFile) {
              $file = File::Create([
                'title' => $request->file('file-3')->hashName(),
                'name' => $thirdFileName,
                'owner' => $user->name,
                'owner_id' => $user->uuid,
                'ext' => $request->file('file-3')->extension(),
              ]);
              $path = $request->file('file-3')->storeAs('private', $request->file('file-3')->hashName());
            } else {
              response()->json(['message'=>'Third file already exists!'], 400);
            }
          }
        }
      }
      return response()->json(['message'=>'File(s) saved!']);
    }
    return response()->json(['message'=>'Unauthorized'], 401);
  }
  public function update(Request $request) {
    $validator = Validator::make($request->all(), [
      'name' => 'required|string|max:255',
      'rename' => 'required|string|max:255|min:5',
    ]);
    if ($validator->fails()) {
      return response()->json($validator->messages(), 400);
    }
    $id = $request->cookie('user_id');
    if (isset($id)) {
      $user = User::where('uuid', $id)->first();
      if (!$user) {
        return response()->json(['message'=>'Unauthorized'], 401);
      }
      $fileName = pathinfo($request->name, PATHINFO_FILENAME);
      $file = File::where('name', $fileName)->first();
      if (!$file) {
        return response()->json(['message'=>'You didn\'t post this file!'], 404);
      }
      $ext = $file->ext;
      $rename = str_replace(['"', "/", "\\", ":", "<", ">", "*", "?", "|"], "_", $request->rename);
      $rename = preg_replace('/_+/', '_', $rename);
      if ($file->owner_id === $user->uuid) {
        $update = File::where('name', $file->name)->update(['name' => $rename]);
        return response()->json(['message'=>'File has been renamed!']); 
      }
      return response()->json(['message'=>'You didn\'t post this file!'], 404);
    }
    return response()->json(['message'=>'Unauthorized!'], 401);
  }

  public function delete(Request $request) {
    $validator = Validator::make($request->all(), [
      'title' => 'required'
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
      $fileName = pathinfo($request->title, PATHINFO_FILENAME);
      $file = File::where('name', $fileName)->first();
      if (!$file) {
        return response()->json(['message'=>'You didn\'t post this file!'], 404);
      }
      if ($file->owner_id === $user->uuid) {
        $delete = File::where('name', $fileName)->delete();
        Storage::disk('local')->delete('private/'.$file->title);
        return response()->json(['message'=>'File has been deleted!']); 
      } 
      return response()->json(['message'=>'You didn\'t post this file!'], 404);
    }
    return response()->json(['message'=>'Unauthorized!'], 401);
  }
}
