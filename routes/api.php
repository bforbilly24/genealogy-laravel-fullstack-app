<?php

use App\Http\Controllers\ImageController;
use Illuminate\Support\Facades\Route;

Route::get('/gallery', [ImageController::class, 'index'])->name('api.gallery');