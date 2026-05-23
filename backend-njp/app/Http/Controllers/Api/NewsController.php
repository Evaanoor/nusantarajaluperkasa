<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::orderBy('published_at', 'desc')->get();
        
        // Transform thumbnail to thumbnail_url to match mock response
        $transformed = $news->map(function ($item) {
            return [
                'id' => $item->id,
                'slug' => $item->slug,
                'title' => $item->title,
                'excerpt' => $item->excerpt,
                'thumbnail_url' => $item->thumbnail,
                'published_at' => $item->published_at ? \Carbon\Carbon::parse($item->published_at)->format('l, jS F Y') : null,
                'is_featured' => (bool) $item->is_featured,
            ];
        })->values(); // Reset array keys after map
        
        return response()->json([
            'status' => 'success',
            'message' => 'Data daftar berita berhasil diambil',
            'data' => $transformed
        ]);
    }

    public function show($slug)
    {
        $news = News::where('slug', $slug)->firstOrFail();
        
        $related = News::where('id', '!=', $news->id)
            ->orderBy('published_at', 'desc')
            ->take(3)
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'slug' => $item->slug,
                    'title' => $item->title,
                    'thumbnail' => $item->thumbnail,
                    'date' => $item->published_at ? \Carbon\Carbon::parse($item->published_at)->format('d M Y') : null,
                ];
            });

        $data = [
            'id' => $news->id,
            'slug' => $news->slug,
            'title' => $news->title,
            'excerpt' => $news->excerpt,
            'thumbnail_url' => $news->thumbnail,
            'main_image' => $news->main_image,
            'side_image' => $news->side_image,
            'content' => is_string($news->content) ? json_decode($news->content, true) : $news->content,
            'published_at' => $news->published_at ? \Carbon\Carbon::parse($news->published_at)->format('l, jS F Y') : null,
            'is_featured' => (bool) $news->is_featured,
            'category' => $news->category,
            'related_articles' => $related,
        ];
        
        return response()->json([
            'status' => 'success',
            'data' => $data
        ]);
    }
}
