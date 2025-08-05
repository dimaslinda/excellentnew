<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/nlp', function () {
    return Inertia::render('NLP');
})->name('nlp');

Route::get('/neuro', function () {
    return Inertia::render('Neuro');
})->name('neuro');

Route::get('/elearning', function () {
    return Inertia::render('ELearning');
})->name('elearning');

Route::get('/talentmapping', function () {
    return Inertia::render('TalentMapping');
})->name('talentmapping');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
