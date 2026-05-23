<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $path = base_path('../public/draft/api-contract/contact.json');
        if (file_exists($path)) {
            $json = json_decode(file_get_contents($path), true);
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
            'message' => 'contact.json not found'
        ], 404);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:50',
            'message' => 'required|string',
        ]);

        $contact = Contact::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Pesan berhasil dikirim',
            'data' => $contact
        ], 201);
    }
}
