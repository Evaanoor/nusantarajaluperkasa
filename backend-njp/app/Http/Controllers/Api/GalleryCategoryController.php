<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GalleryCategory;
use Illuminate\Http\Request;

class GalleryCategoryController extends Controller
{
    public function index()
    {
        // Assuming relationship 'items' is defined in GalleryCategory model
        $categories = GalleryCategory::with('items')->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Data galeri dan kategori berhasil diambil',
            'data' => [
                'categories' => $categories
            ]
        ]);
    }

    public function show($slug)
    {
        $category = GalleryCategory::where('slug', $slug)->with('items')->firstOrFail();
        return response()->json([
            'status' => 'success',
            'data' => [
                'name' => $category->name,
                'slug' => $category->slug,
                'items' => $category->items
            ]
        ]);
    }
}
