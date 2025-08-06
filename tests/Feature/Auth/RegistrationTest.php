<?php

use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test('registration screen requires authentication', function () {
    $response = $this->get('/register');

    $response->assertRedirect(route('login'));
});

test('authenticated admin can access registration screen', function () {
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->get('/register');

    $response->assertStatus(200);
});

test('authenticated admin can register a new user', function () {
    // Create and authenticate an admin user
    $admin = User::factory()->create();
    
    $response = $this->actingAs($admin)
        ->post('/register', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

    // Should redirect to dashboard after successful registration
    $response->assertRedirect(route('dashboard', absolute: false));
    // New user should be created in database
    $this->assertDatabaseHas('users', [
        'email' => 'test@example.com',
        'name' => 'Test User',
    ]);
});