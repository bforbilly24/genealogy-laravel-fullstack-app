<?php

use App\Models\FamilyMember;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/', fn() => Inertia::render('Home'));
Route::get('/sejarah', fn() => Inertia::render('History'));
Route::get('/berita', fn() => Inertia::render('News'));
Route::get('/berita/{slug}', function ($slug) {
    return Inertia::render('NewsDetail', [
        'slug' => $slug,
    ]);
})->name('news.detail');

Route::get('/silsilah', function () {
    $familyMembers = FamilyMember::with([
        'parent' => fn($query) => $query->with('parent'),
        'children' => fn($query) => $query->with('children'),
    ])
        ->get();
    return Inertia::render('Genealogy', [
        'familyTree' => $familyMembers->toArray(),
    ]);
});
Route::get('/galeri', fn() => Inertia::render('Gallery'));

