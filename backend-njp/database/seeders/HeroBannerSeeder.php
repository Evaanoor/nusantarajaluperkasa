<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class HeroBannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $herobanners = [
            [
                'id' => 101,
                'title' => 'Main slide',
                'image_url' => 'banner1.jpg',
                'order' => 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 102,
                'title' => 'Secondary slide',
                'image_url' => 'banner2.jpeg',
                'order' => 2,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 103,
                'title' => 'Tertiary slide',
                'image_url' => 'banner3.jpeg',
                'order' => 3,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 104,
                'title' => 'Fourth slide',
                'image_url' => 'banner.jpeg',
                'order' => 4,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('hero_banners')->insert($herobanners);
    }
}
