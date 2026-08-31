import { useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/AppLayout';
import type { FeatureItem, StatItem, TestimonialItem } from '@/types';

interface HomeProps {
    stats: StatItem[];
    features: FeatureItem[];
    testimonials: TestimonialItem[];
}

export default function Home({ stats, features, testimonials }: HomeProps) {
    const [activeTab, setActiveTab] = useState<
        'declare' | 'orchestrate' | 'observe'
    >('declare');

    const codeSnippets = {
        declare: `// lumina.config.ts
export default defineConfig({
  cluster: "edge-us-east",
  telemetry: { sampleRate: 1.0, realTime: true },
  workflows: [
    { name: "sync-pipeline", trigger: "cron(*/5 * * * *)", concurrency: 10 }
  ]
});`,
        orchestrate: `$ lumina deploy --env production
✔ Validating workflow schemas... [OK]
✔ Synchronizing SQLite database replica... [OK]
✔ 4 edge zones warm and accepting traffic (14ms latency)
🚀 Deployed revision v2.4.8 to production`,
        observe: `$ lumina telemetry inspect --live
[0.42ms] GET /api/v1/telemetry  -> 200 OK (p99: 1.2ms)
[0.89ms] SQLITE QUERY SELECT * FROM contact_messages (0.12ms)
[1.10ms] WORKFLOW sync-pipeline completed successfully (0 warnings)`,
    };

    return (
        <AppLayout title="Home — Intelligent Cloud Orchestration">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
                {/* Background Subtle Gradient Glow */}
                <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-80">
                    <div
                        className="aspect-[1155/678] w-[68.125rem] bg-gradient-to-tr from-zinc-200 to-zinc-300 opacity-40 dark:from-zinc-800 dark:to-zinc-900 dark:opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl space-y-6 text-center">
                        {/* Status Announcement Pill */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-medium text-zinc-700 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                            <span>
                                Lumina 2.4 is live with zero-overhead telemetry
                            </span>
                            <span className="text-zinc-400 dark:text-zinc-600">
                                &rarr;
                            </span>
                        </div>

                        {/* Hero Headline */}
                        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl sm:leading-[1.15] dark:text-white">
                            Intelligent infrastructure for fast-moving teams.
                        </h1>

                        {/* Subtitle */}
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
                            Automate complex background workloads, orchestrate
                            multi-region edge deployments, and observe real-time
                            telemetry with zero configuration overhead.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                            >
                                Start Building Free
                            </Link>
                            <Link
                                href="/about"
                                className="dark:hover:bg-zinc-850 inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-xs transition hover:bg-zinc-50 hover:text-zinc-950 active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:text-white"
                            >
                                How Lumina Works
                            </Link>
                        </div>
                    </div>

                    {/* Interactive Code Preview / Terminal Showcase */}
                    <div className="mx-auto mt-14 max-w-4xl">
                        <div className="overflow-hidden rounded-xl border border-zinc-200/90 bg-zinc-900 text-zinc-100 shadow-xl dark:border-zinc-800">
                            {/* Window Header / Tabs */}
                            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/60 px-4 py-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-zinc-700" />
                                    <span className="h-3 w-3 rounded-full bg-zinc-700" />
                                    <span className="h-3 w-3 rounded-full bg-zinc-700" />
                                </div>
                                <div className="flex items-center gap-1 rounded-md bg-zinc-900/80 p-1 font-mono text-xs">
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('declare')}
                                        className={`rounded px-3 py-1 transition-colors ${
                                            activeTab === 'declare'
                                                ? 'bg-zinc-800 font-medium text-white'
                                                : 'text-zinc-400 hover:text-zinc-200'
                                        }`}
                                    >
                                        1. Declare
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveTab('orchestrate')
                                        }
                                        className={`rounded px-3 py-1 transition-colors ${
                                            activeTab === 'orchestrate'
                                                ? 'bg-zinc-800 font-medium text-white'
                                                : 'text-zinc-400 hover:text-zinc-200'
                                        }`}
                                    >
                                        2. Orchestrate
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('observe')}
                                        className={`rounded px-3 py-1 transition-colors ${
                                            activeTab === 'observe'
                                                ? 'bg-zinc-800 font-medium text-white'
                                                : 'text-zinc-400 hover:text-zinc-200'
                                        }`}
                                    >
                                        3. Observe
                                    </button>
                                </div>
                                <div className="hidden font-mono text-[11px] text-zinc-500 sm:block">
                                    sqlite://database.sqlite
                                </div>
                            </div>

                            {/* Code snippet block */}
                            <div className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-zinc-300 sm:text-[13px]">
                                <pre className="font-mono">
                                    <code>{codeSnippets[activeTab]}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Controller Data: Stats Grid */}
            <section className="border-y border-zinc-200/80 bg-white py-12 dark:border-zinc-800/80 dark:bg-zinc-900/40">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="flex flex-col space-y-1 rounded-xl border border-zinc-100 bg-zinc-50/50 p-5 dark:border-zinc-800/60 dark:bg-zinc-900/30"
                            >
                                <span className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                                    {stat.value}
                                </span>
                                <span className="text-xs font-medium text-zinc-900 dark:text-zinc-200">
                                    {stat.label}
                                </span>
                                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                                    {stat.description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 sm:py-28">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                            Architecture
                        </span>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                            Engineered for uncompromising speed and clarity.
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                            Everything you need to orchestrate modern
                            distributed microservices without operational
                            overhead.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group relative rounded-2xl border border-zinc-200 bg-white p-7 transition hover:border-zinc-300 hover:shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white">
                                        {feature.icon === 'bolt' && (
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                            </svg>
                                        )}
                                        {feature.icon === 'chart' && (
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 3v18h18M18 9l-5 5-4-4-4 4"
                                                />
                                            </svg>
                                        )}
                                        {feature.icon === 'code' && (
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <polyline points="16 18 22 12 16 6" />
                                                <polyline points="8 6 2 12 8 18" />
                                            </svg>
                                        )}
                                        {feature.icon === 'shield' && (
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                                        {feature.tag}
                                    </span>
                                </div>
                                <h3 className="mt-5 text-base font-semibold text-zinc-900 dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="border-t border-zinc-200/80 bg-zinc-100/50 py-16 sm:py-24 dark:border-zinc-800/80 dark:bg-zinc-900/30">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                            Testimonials
                        </span>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                            Trusted by engineering leaders.
                        </h2>
                    </div>

                    <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
                        {testimonials.map((item) => (
                            <div
                                key={item.author}
                                className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-7 shadow-2xs dark:border-zinc-800 dark:bg-zinc-950"
                            >
                                <p className="text-xs leading-relaxed text-zinc-700 italic sm:text-sm dark:text-zinc-300">
                                    "{item.quote}"
                                </p>
                                <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-900">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
                                        {item.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-zinc-900 dark:text-white">
                                            {item.author}
                                        </div>
                                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Minimalist CTA Banner */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-xs sm:p-12 dark:border-zinc-800 dark:bg-zinc-950">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                            Ready to experience effortless cloud orchestration?
                        </h2>
                        <p className="mx-auto mt-3 max-w-lg text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
                            Deploy your first workload in minutes with our free
                            developer tier. No credit card required.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-xs font-medium text-white shadow-xs transition hover:bg-zinc-800 active:scale-[0.98] sm:text-sm dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                            >
                                Contact Our Team
                            </Link>
                            <Link
                                href="/about"
                                className="dark:hover:bg-zinc-850 inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-xs font-medium text-zinc-800 transition hover:bg-zinc-50 sm:text-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                            >
                                Read About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
