<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
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

        $products = [];
        $slugs = [];

        foreach ($categories as $cat) {
            foreach ($cat['items'] as $key => $item) {
                $uniqueSlug = $item['slug'] . '-' . $cat['id'] . '-' . $key;
                $slugs[] = $uniqueSlug;

                $products[] = [
                    'slug' => $uniqueSlug,
                    'name' => $item['name'],
                    'category' => $cat['name'],
                    'price' => 100000,
                    'primary_image_url' => $item['primary_image_url'] ?? '/draft/mocks/images/lamp.jpeg',
                    'hover_image_url' => $item['hover_image_url'] ?? '/draft/mocks/images/lamp-angle.jpeg',
                    'description' => 'Ini adalah deskripsi otomatis dari seeder berdasarkan data di galleries.json. Produk ini sangat elegan dan cocok untuk rumah Anda.',
                    'specifications' => json_encode([
                        'material' => 'Handmade Ceramic',
                        'dimensions' => '15x15x20 cm',
                        'weight' => '1.5 kg'
                    ]),
                    'features' => json_encode([
                        'Premium Quality',
                        'Handcrafted',
                        'Authentic Design'
                    ]),
                    'images' => json_encode([
                        $item['primary_image_url'] ?? '/draft/mocks/images/lamp.jpeg',
                        $item['hover_image_url'] ?? '/draft/mocks/images/lamp-angle.jpeg'
                    ]),
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        // Add the classic-nightstand-lamp from products.json as well just in case
        if (!in_array('classic-nightstand-lamp', $slugs)) {
            $products[] = [
                'slug' => 'classic-nightstand-lamp',
                'name' => 'Classic Nightstand Lamp',
                'category' => 'Lamp',
                'price' => 150000,
                'primary_image_url' => '/draft/mocks/images/lamp.jpeg',
                'hover_image_url' => '/draft/mocks/images/lamp-angle.jpeg',
                'description' => 'Bawa sentuhan alami dan elegan ke dalam rumah Anda dengan Classic Nightstand Lamp ini.',
                'specifications' => json_encode(['material' => 'Handmade Ceramic']),
                'features' => json_encode(['Warm White LED Included']),
                'images' => json_encode(['/draft/mocks/images/lamp.jpeg']),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('products')->truncate();
        
        // Insert in chunks to avoid large query sizes
        $chunks = array_chunk($products, 50);
        foreach ($chunks as $chunk) {
            DB::table('products')->insert($chunk);
        }
    }
}
