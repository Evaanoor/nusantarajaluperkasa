<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contacts = [
            [
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'subject' => 'Inquiry about products',
                'phone' => '+1234567890',
                'message' => 'I am interested in your handmade products...',
                'is_read' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane@example.com',
                'subject' => 'Collaboration',
                'phone' => '+0987654321',
                'message' => 'Would like to collaborate with your company...',
                'is_read' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('contacts')->insert($contacts);
    }
}
