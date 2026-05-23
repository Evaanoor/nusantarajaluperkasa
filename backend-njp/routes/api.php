<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\GalleryCategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\HeroBannerController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    Route::get('/news', [NewsController::class, 'index']);
    Route::get('/news/{slug}', [NewsController::class, 'show']);

    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{slug}', [ProductController::class, 'show']);

    Route::get('/galleries', [GalleryCategoryController::class, 'index']);

    Route::get('/contact', [ContactController::class, 'index']);
    Route::post('/contact', [ContactController::class, 'store']);

    Route::get('/hero-banners', [HeroBannerController::class, 'index']);
    
    Route::get('/home_content', [\App\Http\Controllers\Api\HomeController::class, 'index']);
    Route::get('/about', [\App\Http\Controllers\Api\AboutController::class, 'index']);
});
