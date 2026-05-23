<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Data daftar produk berhasil diambil',
            'data' => $products
        ]);
    }

    public function show($slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        return response()->json([
            'status' => 'success',
            'message' => 'Data detail produk berhasil diambil',
            'data' => $product
        ]);
    }
}
