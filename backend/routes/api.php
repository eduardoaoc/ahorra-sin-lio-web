<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::post('/contact', ContactController::class)->middleware('throttle:5,1');

Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'message' => 'Backend Laravel funcionando',
    ]);
});
