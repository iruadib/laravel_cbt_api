<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Exception;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Exceptions\InvalidOrderException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->renderable(function (NotFoundHttpException $e, $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'message' => 'Cannot find API!'
                ], 404);
            } else {
                return response()->json([
                    'message' => 'Cannot find route!'
                ], 404);
            }
        });
        $this->renderable(function (InvalidOrderException $e, $request) {
            return response()->json(['message' => 'Something went wrong!'], 500);
        });
        $this->renderable(function (MethodNotAllowedHttpException $e, $request) {
            return response()->json(['message' => $e->getMessage()], 405);
        });
    }
}
