<?php

use App\Models\ContactMessage;
use Inertia\Testing\AssertableInertia as Assert;

test('home page renders successfully with demo data', function () {
    $response = $this->get(route('home'));

    $response->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->has('stats', 4)
            ->has('features', 4)
            ->has('testimonials', 2)
        );
});

test('about page renders successfully with mission and team data', function () {
    $response = $this->get(route('about'));

    $response->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('About')
            ->has('mission')
            ->has('values', 4)
            ->has('team', 4)
            ->has('milestones', 3)
        );
});

test('contact page renders successfully with contact info and SQLite entries', function () {
    ContactMessage::factory()->create([
        'name' => 'Demo Visitor',
        'email' => 'visitor@example.com',
        'subject' => 'Demo SQLite Inquiry',
        'message' => 'Testing SQLite integration with Laravel 13 and Inertia.',
    ]);

    $response = $this->get(route('contact.index'));

    $response->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Contact')
            ->has('contactInfo')
            ->has('faqs', 4)
            ->has('totalInquiriesCount')
            ->has('recentMessages')
        );
});

test('contact form validates input fields', function () {
    $response = $this->post(route('contact.store'), [
        'name' => '',
        'email' => 'invalid-email',
        'subject' => '',
        'message' => 'short',
    ]);

    $response->assertSessionHasErrors(['name', 'email', 'subject', 'message']);
    expect(ContactMessage::where('email', 'invalid-email')->exists())->toBeFalse();
});

test('contact form stores inquiry in SQLite database and redirects with success flash', function () {
    $contactData = [
        'name' => 'Jordan Taylor',
        'email' => 'jordan@cloudstartup.dev',
        'subject' => 'Inquiry regarding multi-region clusters',
        'message' => 'We want to test Lumina edge telemetry with our existing SQLite and Laravel services.',
    ];

    $response = $this->post(route('contact.store'), $contactData);

    $response->assertRedirect();
    $response->assertSessionHas('success');

    $this->assertDatabaseHas('contact_messages', [
        'name' => 'Jordan Taylor',
        'email' => 'jordan@cloudstartup.dev',
        'subject' => 'Inquiry regarding multi-region clusters',
    ]);
});
