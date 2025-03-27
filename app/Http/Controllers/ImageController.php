<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\JsonResponse;

class ImageController extends Controller
{
    public function index(): JsonResponse
    {
        $images = Image::all()->map(function ($image) {
            return [
                'id' => $image->id,
                'title' => $image->title,
                'src' => asset('storage/' . $image->path),
                'description' => $image->description ?? 'Tidak ada deskripsi yang ditampilkan',
            ];
        });

        return response()->json([
            'cards' => $images,
        ]);
    }
}
