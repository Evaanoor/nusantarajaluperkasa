<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\GalleryCategory;

class GalleryItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $path = base_path('../public/draft/api-contract/galleries.json');
        if (!file_exists($path)) {
            return;
        }

        $json = json_decode(file_get_contents($path), true);
        $categories = $json['data']['categories'] ?? [];

        $items = [];
        foreach ($categories as $cat) {
            foreach ($cat['items'] as $key => $item) {
                // Generate a predictable unique slug matching ProductSeeder
                $uniqueSlug = $item['slug'] . '-' . $cat['id'] . '-' . $key;
                
                $items[] = [
                    'category_id' => $cat['id'], // Assuming ID matches GalleryCategory
                    'name' => $item['name'],
                    'slug' => $uniqueSlug,
                    'primary_image_url' => $item['primary_image_url'],
                    'hover_image_url' => $item['hover_image_url'] ?? $item['primary_image_url'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        DB::table('gallery_items')->truncate();
        
        $chunks = array_chunk($items, 50);
        foreach ($chunks as $chunk) {
            DB::table('gallery_items')->insert($chunk);
        }
    }
}
