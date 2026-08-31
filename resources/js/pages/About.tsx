import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/AppLayout';
import type { Milestone, MissionData, TeamMember, ValueItem } from '@/types';

interface AboutProps {
    mission: MissionData;
    values: ValueItem[];
    team: TeamMember[];
    milestones: Milestone[];
}

export default function About({
    mission,
    values,
    team,
    milestones,
}: AboutProps) {
    return (
        <AppLayout title="About Us — Lumina">
            {/* Header Section */}
            <section className="border-b border-zinc-200/80 bg-white/50 pt-12 pb-16 sm:pt-20 sm:pb-24 dark:border-zinc-800/80 dark:bg-zinc-950/50">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                            <span>Our Mission & Vision</span>
                        </div>
                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
                            {mission.headline}
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
                            {mission.subheadline}
                        </p>
                    </div>
                </div>
            </section>

            {/* Origin Story & Philosophy */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                                Background
                            </span>
                            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                                Why we built Lumina.
                            </h2>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 font-mono text-sm text-white dark:bg-white dark:text-zinc-950">
                                    01
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-zinc-900 dark:text-white">
                                        100% Autonomous
                                    </div>
                                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                                        Zero operational drag for engineering
                                        teams
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-7 text-sm leading-relaxed text-zinc-600 sm:p-9 sm:text-base lg:col-span-7 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400">
                            <p>{mission.story}</p>
                            <p>
                                Rather than wrapping existing cloud providers in
                                another bloated web console, we re-architected
                                orchestration from the ground up:
                                sub-millisecond edge SQLite synchronization,
                                typed infrastructure manifests, and automated
                                telemetry alerts that trigger self-healing
                                actions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="border-t border-zinc-200/80 bg-zinc-100/40 py-16 sm:py-24 dark:border-zinc-800/80 dark:bg-zinc-900/20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                            Philosophy
                        </span>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                            The principles guiding everything we build.
                        </h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {values.map((val, idx) => (
                            <div
                                key={val.title}
                                className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-2xs dark:border-zinc-800 dark:bg-zinc-950"
                            >
                                <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                                    0{idx + 1}
                                </div>
                                <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-white">
                                    {val.title}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-400">
                                    {val.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founding Team */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                            People
                        </span>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                            Meet the engineering leadership.
                        </h2>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                            Distributed systems researchers, developer
                            advocates, and product architects working together.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
                            >
                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-sm font-bold text-white shadow-xs dark:bg-zinc-100 dark:text-zinc-950">
                                        {member.initials}
                                    </div>
                                    <h3 className="mt-4 text-sm font-semibold text-zinc-900 dark:text-white">
                                        {member.name}
                                    </h3>
                                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                                        {member.role}
                                    </div>
                                    <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones & Timeline */}
            <section className="border-t border-zinc-200/80 bg-zinc-50/50 py-16 sm:py-24 dark:border-zinc-800/80 dark:bg-zinc-900/30">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                            Journey
                        </span>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                            Key milestones in our story.
                        </h2>
                    </div>

                    <div className="mt-12 max-w-3xl space-y-6">
                        {milestones.map((m) => (
                            <div
                                key={m.year}
                                className="flex flex-col items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 sm:flex-row dark:border-zinc-800 dark:bg-zinc-950"
                            >
                                <div className="rounded-md bg-zinc-100 px-3 py-1 font-mono text-xs font-bold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                                    {m.year}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                        {m.title}
                                    </h3>
                                    <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-400">
                                        {m.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Links */}
                    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200/70 pt-8 dark:border-zinc-800/70">
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            Want to collaborate or discuss partnerships?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-950 underline underline-offset-4 dark:text-white"
                        >
                            <span>Reach out to our founders</span>
                            <span>&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
