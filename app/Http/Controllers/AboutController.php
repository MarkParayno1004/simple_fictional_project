<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Display the About page.
     */
    public function index(): Response
    {
        $mission = [
            'headline' => 'Empowering builders to create without infrastructure friction',
            'subheadline' => 'Lumina was born out of a simple observation: developers spend over 40% of their time wrestling with complex DevOps pipelines rather than shipping product value.',
            'story' => 'Founded in 2024 by a team of distributed systems engineers and product designers, Lumina provides an elegant, minimalist control plane for autonomous cloud operations. We believe great software should feel weightless, transparent, and effortlessly reliable.',
        ];

        $values = [
            [
                'title' => 'Radical Simplicity',
                'description' => 'We strip away accidental complexity until only the essential and delightful remains. No bloated dashboards or obscure configs.',
            ],
            [
                'title' => 'Engineering Craftsmanship',
                'description' => 'Every API endpoint, every micro-interaction, and every data line is polished with deep respect for precision and performance.',
            ],
            [
                'title' => 'Openness & Trust',
                'description' => 'Clear communication, predictable pricing, and transparent roadmaps. We treat our developer community as true engineering partners.',
            ],
            [
                'title' => 'Relentless Reliability',
                'description' => 'Our distributed architecture is engineered for 99.99% uptime with autonomous failovers and cryptographic integrity at every step.',
            ],
        ];

        $team = [
            [
                'name' => 'Dr. Sophia Sterling',
                'role' => 'Co-Founder & CEO',
                'bio' => 'Former Systems Architect at CloudNative Labs. Passionate about autonomous distributed infrastructure and developer experience.',
                'initials' => 'SS',
            ],
            [
                'name' => 'David Kim',
                'role' => 'Co-Founder & CTO',
                'bio' => 'Kernel contributor and telemetry pioneer. 12+ years optimizing high-throughput low-latency network engines.',
                'initials' => 'DK',
            ],
            [
                'name' => 'Maya Patel',
                'role' => 'Head of Product Design',
                'bio' => 'Design lead formerly at Vector UI. Obsessed with minimalist aesthetics, typography, and human-computer ergonomics.',
                'initials' => 'MP',
            ],
            [
                'name' => 'Liam O\'Connor',
                'role' => 'VP of Cloud Engineering',
                'bio' => 'Specialist in multi-cloud edge networks, resilience engineering, and developer tooling automation.',
                'initials' => 'LO',
            ],
        ];

        $milestones = [
            [
                'year' => '2024',
                'title' => 'The Seed & Genesis',
                'description' => 'Lumina engine prototype created, securing seed round from top developer-focused venture funds.',
            ],
            [
                'year' => '2025',
                'title' => 'Global Developer Beta',
                'description' => 'Expanded to 10,000+ engineers, executing 50 million workload tasks with 99.99% edge reliability.',
            ],
            [
                'year' => '2026',
                'title' => 'Enterprise Orchestration & Beyond',
                'description' => 'Launched autonomous telemetry pipelines and multi-region vault clusters for world-class product teams.',
            ],
        ];

        return Inertia::render('About', [
            'mission' => $mission,
            'values' => $values,
            'team' => $team,
            'milestones' => $milestones,
        ]);
    }
}
