<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the startup landing page.
     */
    public function index(): Response
    {
        $stats = [
            [
                'value' => '99.99%',
                'label' => 'Uptime Guarantee',
                'description' => 'Enterprise-grade edge reliability',
            ],
            [
                'value' => '10x',
                'label' => 'Deployment Speed',
                'description' => 'Zero-downtime rollouts in seconds',
            ],
            [
                'value' => '50k+',
                'label' => 'Developers',
                'description' => 'Building modern cloud architectures',
            ],
            [
                'value' => (string) (ContactMessage::count() + 120),
                'label' => 'Live Engagements',
                'description' => 'Active community & client conversations',
            ],
        ];

        $features = [
            [
                'title' => 'Autonomous Orchestration',
                'description' => 'Automate background jobs, task routing, and event pipelines with self-healing infrastructure that adapts to load spikes in real time.',
                'tag' => 'Core Engine',
                'icon' => 'bolt',
            ],
            [
                'title' => 'Instant Edge Telemetry',
                'description' => 'Gain sub-millisecond visibility into every distributed trace, database query, and API call without slowing down user requests.',
                'tag' => 'Observability',
                'icon' => 'chart',
            ],
            [
                'title' => 'Frictionless DX',
                'description' => 'Designed with developer happiness first. Typed APIs, instant local environments, and preview deployments tailored for agile teams.',
                'tag' => 'Developer First',
                'icon' => 'code',
            ],
            [
                'title' => 'Enterprise Vault Security',
                'description' => 'End-to-end encryption, automated compliance guardrails, and role-based zero-trust access control right out of the box.',
                'tag' => 'Security',
                'icon' => 'shield',
            ],
        ];

        $testimonials = [
            [
                'quote' => 'Lumina reduced our cloud latency by 65% in the first week. The minimalist DX allowed our team to ship features 3x faster.',
                'author' => 'Elena Rostova',
                'role' => 'CTO at HyperScale Systems',
                'company' => 'HyperScale',
            ],
            [
                'quote' => 'The cleanest orchestration platform we have ever used. Everything is fast, intuitive, and remarkably solid.',
                'author' => 'Marcus Vance',
                'role' => 'Principal Architect',
                'company' => 'Verve Cloud',
            ],
        ];

        return Inertia::render('Home', [
            'stats' => $stats,
            'features' => $features,
            'testimonials' => $testimonials,
        ]);
    }
}
