<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'specifications' => 'array',
        'features' => 'array',
        'images' => 'array',
    ];
}
