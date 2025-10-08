<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArtworkController;
use App\Http\Controllers\HistoryController;

Route::prefix('v1')->group(function () {
    Route::get('/artworks', [ArtworkController::class, 'index']);
    Route::get('/artworks/{id}', [ArtworkController::class, 'show']);
    Route::get('/artworks/{id}/locale/{locale}', [ArtworkController::class, 'getLocalized']);

    Route::post('/scan', [ArtworkController::class, 'scanQrCode']);

    Route::post('/history/track', [HistoryController::class, 'trackView']);
    Route::get('/history', [HistoryController::class, 'getUserHistory']);
});

Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'service' => 'MCN Museum API',
        'timestamp' => now(),
    ]);
});
