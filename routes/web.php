<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HostingController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', function () {
    return view('user.home');
})->name('user.home');

Route::get('/terms-of-service', function () {
    return view('user.terms');
})->name('terms');

Route::get('/privacy-policy', function () {
    return view('user.privacy-policy');
})->name('privacy.policy');

Route::get('/sitemap', function () {
    return view('user.sitemap');
})->name('sitemap');

// Hosting Routes
Route::prefix('hosting')->group(function () {
    Route::get('/', [HostingController::class, 'index'])->name('hosting.index');
    Route::get('/shared', [HostingController::class, 'shared'])->name('hosting.shared');
    Route::get('/wordpress', [HostingController::class, 'wordpress'])->name('hosting.wordpress');
    Route::get('/cloud', [HostingController::class, 'cloud'])->name('hosting.cloud');
    Route::get('/vps', [HostingController::class, 'vps'])->name('hosting.vps');
    Route::get('/dedicated', [HostingController::class, 'dedicated'])->name('hosting.dedicated');
    Route::get('/compare', [HostingController::class, 'compare'])->name('hosting.compare');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
