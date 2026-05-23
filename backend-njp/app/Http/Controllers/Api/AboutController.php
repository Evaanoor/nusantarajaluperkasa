<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        // For now, return the mock JSON directly so the frontend doesn't break
        // until the actual database tables for About Us are created.
        $path = base_path('../public/draft/api-contract/about.json');
        if (file_exists($path)) {
            $json = json_decode(file_get_contents($path), true);
            
            // The frontend sometimes expects { status: 'success', data: { ... } }
            // Let's wrap it if it's not already wrapped.
            if (!isset($json['status'])) {
                return response()->json([
                    'status' => 'success',
                    'data' => $json
                ]);
            }
            return response()->json($json);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'about.json not found'
        ], 404);
    }
}
