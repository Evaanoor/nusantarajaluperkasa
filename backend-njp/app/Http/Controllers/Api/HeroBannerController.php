<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HeroBanner;
use Illuminate\Http\Request;

class HeroBannerController extends Controller
{
    public function index()
    {
        $banners = HeroBanner::where('is_active', true)->orderBy('order')->get();
        return response()->json([
            'status' => 'success',
            'data' => $banners
        ]);
    }
}
