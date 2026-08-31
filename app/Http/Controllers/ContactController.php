<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Display the Contact Us page.
     */
    public function index(): Response
    {
        $contactInfo = [
            'email' => 'hello@lumina.dev',
            'support' => 'support@lumina.dev',
            'press' => 'press@lumina.dev',
            'location' => '548 Market St, Suite 39200, San Francisco, CA 94104',
            'response_time' => 'Under 2 hours during standard business days',
            'office_hours' => 'Monday – Friday, 8:00 AM – 6:00 PM PST',
        ];

        $faqs = [
            [
                'question' => 'How quickly can our team integrate Lumina into our stack?',
                'answer' => 'Most teams are up and running within 15 minutes. We provide standard SDKs, pre-built CLI tools, and automated GitHub Action hooks.',
            ],
            [
                'question' => 'What kind of support is included with developer plans?',
                'answer' => 'All plans include direct access to our developer discord and ticketing system. Enterprise plans feature dedicated Slack channels and 24/7 incident response.',
            ],
            [
                'question' => 'Do you offer on-premise or isolated VPC deployment options?',
                'answer' => 'Yes, our Enterprise tier supports dedicated private VPC deployments across AWS, Google Cloud, and Azure regions.',
            ],
            [
                'question' => 'Can we try Lumina with our existing staging environment?',
                'answer' => 'Absolutely. We offer a 14-day full-featured sandbox environment with zero credit card required.',
            ],
        ];

        $totalInquiriesCount = ContactMessage::count();
        $recentMessages = ContactMessage::query()
            ->latest()
            ->take(3)
            ->get(['id', 'name', 'subject', 'created_at']);

        return Inertia::render('Contact', [
            'contactInfo' => $contactInfo,
            'faqs' => $faqs,
            'totalInquiriesCount' => $totalInquiriesCount,
            'recentMessages' => $recentMessages,
        ]);
    }

    /**
     * Store a newly created contact message in the database.
     */
    public function store(ContactRequest $request): RedirectResponse
    {
        ContactMessage::create($request->validated());

        return back()->with('success', 'Thank you for reaching out! Your message has been received. Our team will get back to you shortly.');
    }
}
