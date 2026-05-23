<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jsonPath = base_path('../public/draft/api-contract/news_detail.json');
        $richContent = [];
        if (file_exists($jsonPath)) {
            $richContent = json_decode(file_get_contents($jsonPath), true)['data']['content'] ?? [];
        }

        $news = [
            [
                'slug' => 'jiffina-march-7-10-2026-furniture-and-handicraft-exhibition',
                'title' => 'Jiffina March 7 - 10 2026 Furniture and handicraft exhibition',
                'excerpt' => 'Visit of the Deputy and Chief Secretary of the Special Region of Yogyakarta to our stand, Jiffina 2026, booth B.15',
                'thumbnail' => '/draft/mocks/images/news-dump.jpg',
                'main_image' => '/draft/mocks/images/news-dump.jpg',
                'side_image' => '/draft/mocks/images/news-dump.jpg',
                'published_at' => now(),
                'is_featured' => true,
                'category' => 'EXHIBITION',
                'content' => json_encode($richContent),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'perilisan-koleksi-vas-terbaru',
                'title' => 'Perilisan Koleksi Vas Terbaru',
                'excerpt' => 'Koleksi terbaru kami menghadirkan nuansa minimalis untuk ruang tamu Anda...',
                'thumbnail' => '/draft/mocks/images/news-dump.jpg',
                'main_image' => '/draft/mocks/images/news-dump.jpg',
                'side_image' => '/draft/mocks/images/news-dump.jpg',
                'published_at' => now()->subDays(1),
                'is_featured' => true,
                'category' => 'NEWS',
                'content' => json_encode($richContent),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'tips-merawat-keramik-handmade',
                'title' => 'Tips Merawat Keramik Handmade',
                'excerpt' => 'Berikut adalah beberapa tips agar keramik buatan tangan Anda tetap awet...',
                'thumbnail' => '/draft/mocks/images/news-dump.jpg',
                'main_image' => '/draft/mocks/images/news-dump.jpg',
                'side_image' => '/draft/mocks/images/news-dump.jpg',
                'published_at' => now()->subDays(2),
                'is_featured' => false,
                'category' => 'TIPS',
                'content' => json_encode($richContent),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'pameran-desain-interior-2024',
                'title' => 'Pameran Desain Interior 2024',
                'excerpt' => 'Kami akan hadir di pameran desain interior terbesar tahun ini...',
                'thumbnail' => '/draft/mocks/images/news-dump.jpg',
                'main_image' => '/draft/mocks/images/news-dump.jpg',
                'side_image' => '/draft/mocks/images/news-dump.jpg',
                'published_at' => now()->subDays(3),
                'is_featured' => false,
                'category' => 'EXHIBITION',
                'content' => json_encode($richContent),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'pameran-desain-interior-2024-v2',
                'title' => 'Pameran Desain Interior 2024',
                'excerpt' => 'Kami akan hadir di pameran desain interior terbesar tahun ini...',
                'thumbnail' => '/draft/mocks/images/news-dump.jpg',
                'main_image' => '/draft/mocks/images/news-dump.jpg',
                'side_image' => '/draft/mocks/images/news-dump.jpg',
                'published_at' => now()->subDays(4),
                'is_featured' => false,
                'category' => 'EXHIBITION',
                'content' => json_encode($richContent),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('news')->truncate();
        DB::table('news')->insert($news);
    }
}
