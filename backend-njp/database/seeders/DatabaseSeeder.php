<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test' . time() . '@example.com',
        ]);

        // Call all seeders
        $this->call([
            HeroBannerSeeder::class,
            NewsSeeder::class,
            ProductSeeder::class,
            GalleryCategorySeeder::class,
            GalleryItemSeeder::class,
            ContactSeeder::class,
        ]);
    }
}
