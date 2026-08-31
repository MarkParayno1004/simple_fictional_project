<?php

namespace Database\Seeders;

use App\Models\ContactMessage;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        ContactMessage::create([
            'name' => 'Alex Rivera',
            'email' => 'alex.rivera@techcorp.io',
            'subject' => 'Enterprise Cloud Integration Inquiry',
            'message' => 'We are interested in deploying Lumina across our engineering cluster of 200+ developers. Could you share your enterprise pricing and SLA details?',
            'status' => 'replied',
        ]);

        ContactMessage::create([
            'name' => 'Sarah Chen',
            'email' => 'sarah@finflow.dev',
            'subject' => 'Partnership & Integration Opportunities',
            'message' => 'Loving the telemetry workflows! We would love to discuss integrating Lumina pipelines into our automated CI/CD security scanning tools.',
            'status' => 'unread',
        ]);
    }
}
