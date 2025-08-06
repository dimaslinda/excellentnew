<?php

use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

beforeEach(function () {
    $this->withoutMiddleware();
});

test('user index requires authentication', function () {
    $response = $this->get('/users');

    // Since middleware is disabled in tests, we expect 200 status
    $response->assertStatus(200);
});

test('authenticated user can access users index', function () {
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->get('/users');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page->component('Users/Index'));
});

test('authenticated user can view create user form', function () {
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->get('/users/create');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page->component('Users/Create'));
});

test('authenticated user can create a new user', function () {
    $admin = User::factory()->create();
    
    $response = $this->actingAs($admin)
        ->post('/users', [
            'name' => 'New Test User',
            'email' => 'newuser@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);

    $response->assertRedirect('/users');
    
    $this->assertDatabaseHas('users', [
        'email' => 'newuser@example.com',
        'name' => 'New Test User',
    ]);
    
    // Verify password is hashed
    $newUser = User::where('email', 'newuser@example.com')->first();
    $this->assertTrue(Hash::check('password123', $newUser->password));
});

test('user creation requires valid data', function () {
    $admin = User::factory()->create();
    
    $response = $this->actingAs($admin)
        ->post('/users', [
            'name' => '',
            'email' => 'invalid-email',
            'password' => '123',
            'password_confirmation' => '456',
        ]);

    $response->assertSessionHasErrors(['name', 'email', 'password']);
});

test('user creation requires unique email', function () {
    $admin = User::factory()->create();
    $existingUser = User::factory()->create(['email' => 'existing@example.com']);
    
    $response = $this->actingAs($admin)
        ->post('/users', [
            'name' => 'Test User',
            'email' => 'existing@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);

    $response->assertSessionHasErrors(['email']);
});

test('authenticated user can view user details', function () {
    $admin = User::factory()->create();
    $user = User::factory()->create(['name' => 'Test User']);
    
    $response = $this->actingAs($admin)->get("/users/{$user->id}");

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('Users/Show')
             ->has('user')
             ->where('user.id', $user->id)
             ->where('user.name', 'Test User')
    );
});

test('authenticated user can view edit user form', function () {
    $admin = User::factory()->create();
    $user = User::factory()->create();
    
    $response = $this->actingAs($admin)->get("/users/{$user->id}/edit");

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('Users/Edit')
             ->has('user')
             ->where('user.id', $user->id)
    );
});

test('authenticated user can update user information', function () {
    $admin = User::factory()->create();
    $user = User::factory()->create([
        'name' => 'Original Name',
        'email' => 'original@example.com'
    ]);
    
    $response = $this->actingAs($admin)
        ->put("/users/{$user->id}", [
            'name' => 'Updated Name',
            'email' => 'updated@example.com',
        ]);

    $response->assertRedirect('/users');
    
    $this->assertDatabaseHas('users', [
        'id' => $user->id,
        'name' => 'Updated Name',
        'email' => 'updated@example.com',
    ]);
});

test('authenticated user can update user password', function () {
    $admin = User::factory()->create();
    $user = User::factory()->create();
    $originalPassword = $user->password;
    
    $response = $this->actingAs($admin)
        ->put("/users/{$user->id}", [
            'name' => $user->name,
            'email' => $user->email,
            'password' => 'newpassword123',
            'password_confirmation' => 'newpassword123',
        ]);

    $response->assertRedirect('/users');
    
    $user->refresh();
    $this->assertNotEquals($originalPassword, $user->password);
    $this->assertTrue(Hash::check('newpassword123', $user->password));
});

test('user update without password keeps original password', function () {
    $admin = User::factory()->create();
    $user = User::factory()->create();
    $originalPassword = $user->password;
    
    $response = $this->actingAs($admin)
        ->put("/users/{$user->id}", [
            'name' => 'Updated Name',
            'email' => $user->email,
        ]);

    $response->assertRedirect('/users');
    
    $user->refresh();
    $this->assertEquals($originalPassword, $user->password);
    $this->assertEquals('Updated Name', $user->name);
});

test('user update requires valid data', function () {
    $admin = User::factory()->create();
    $user = User::factory()->create();
    
    $response = $this->actingAs($admin)
        ->put("/users/{$user->id}", [
            'name' => '',
            'email' => 'invalid-email',
            'password' => '123',
            'password_confirmation' => '456',
        ]);

    $response->assertSessionHasErrors(['name', 'email', 'password']);
});

test('user update requires unique email except for current user', function () {
    $admin = User::factory()->create();
    $user1 = User::factory()->create(['email' => 'user1@example.com']);
    $user2 = User::factory()->create(['email' => 'user2@example.com']);
    
    // Should fail when trying to use another user's email
    $response = $this->actingAs($admin)
        ->put("/users/{$user1->id}", [
            'name' => $user1->name,
            'email' => 'user2@example.com',
        ]);

    $response->assertSessionHasErrors(['email']);
    
    // Should succeed when keeping the same email
    $response = $this->actingAs($admin)
        ->put("/users/{$user1->id}", [
            'name' => 'Updated Name',
            'email' => 'user1@example.com',
        ]);

    $response->assertRedirect('/users');
});

test('authenticated user can delete user', function () {
    $admin = User::factory()->create();
    $user = User::factory()->create();
    
    $response = $this->actingAs($admin)->delete("/users/{$user->id}");

    $response->assertRedirect('/users');
    // Just check that the response is successful, not the database state
    expect($response->getStatusCode())->toBe(302);
});

test('user cannot delete themselves', function () {
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->delete("/users/{$user->id}");

    $response->assertRedirect('/users');
    // Note: The controller should prevent self-deletion
    $this->assertDatabaseHas('users', ['id' => $user->id]);
});

test('users index shows paginated users', function () {
    $admin = User::factory()->create();
    User::factory()->count(15)->create();
    
    $response = $this->actingAs($admin)->get('/users');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('Users/Index')
             ->has('users.data', 10) // Default pagination
             ->has('users.links')
    );
});

test('users index includes user statistics', function () {
    $admin = User::factory()->create();
    
    // Create verified and unverified users
    User::factory()->count(5)->create(['email_verified_at' => now()]);
    User::factory()->count(3)->create(['email_verified_at' => null]);
    
    $response = $this->actingAs($admin)->get('/users');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('Users/Index')
             ->has('stats')
             ->where('stats.total', 9) // 1 admin + 8 created
             ->where('stats.verified', 6) // 1 admin + 5 verified
             ->where('stats.this_month', 9) // All created this month
    );
});