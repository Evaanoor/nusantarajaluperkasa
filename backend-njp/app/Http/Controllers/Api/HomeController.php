<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // For now, return the mock JSON directly so the frontend doesn't break
        // until the actual database tables for Home Content are created.
        $path = base_path('../public/draft/api-contract/home_content.json');
        if (file_exists($path)) {
            $json = json_decode(file_get_contents($path), true);
            
            // Dynamically inject 3 real products so their slugs are always valid
            $products = \App\Models\Product::inRandomOrder()->take(3)->get()->map(function($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->name,
                    'slug' => $product->slug,
                    'category_slug' => $product->category, // approximate
                    'primary_image_url' => $product->primary_image_url,
                    'hover_image_url' => $product->hover_image_url ?? $product->primary_image_url,
                ];
            });
            
            if (isset($json['data'])) {
                $json['data']['our_products'] = $products;
            }

            return response()->json($json);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'home_content.json not found'
        ], 404);
    }
}
