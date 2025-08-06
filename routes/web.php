<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TestimoniController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

// API Routes (public access)
Route::get('/api/testimoni', [TestimoniController::class, 'apiIndex'])->name('api.testimoni');

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

    // Admin only - User registration
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::resource('testimoni', TestimoniController::class);
    Route::resource('users', UserController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
