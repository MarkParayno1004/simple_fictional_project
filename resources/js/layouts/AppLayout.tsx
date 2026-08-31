import { useState, type ReactNode } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import type { SharedProps } from '@/types';

interface AppLayoutProps {
    title?: string;
    children: ReactNode;
}

export default function AppLayout({ title, children }: AppLayoutProps) {
    const { url, props } = usePage<SharedProps>();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const flash = props.flash;

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const isActive = (href: string) => {
        if (href === '/') {
            return url === '/';
        }
        return url.startsWith(href);
    };

    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-900 selection:text-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
            <Head
                title={
                    title
                        ? `${title} — Lumina`
                        : 'Lumina — Intelligent Cloud Orchestration'
                }
            />

            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2.5 text-zinc-900 transition-opacity hover:opacity-90 dark:text-white"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-950">
                            <svg
                                className="h-4 w-4 transition-transform group-hover:scale-110"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polygon points="12 2 19 21 12 17 5 21 12 2" />
                            </svg>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-base font-semibold tracking-tight">
                                Lumina
                            </span>
                            <span className="rounded-full border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                                v2.4
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
                                        active
                                            ? 'bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white'
                                            : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-100'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Header Action Button */}
                    <div className="hidden items-center gap-3 md:flex">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white shadow-xs transition hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-hidden dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? (
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {mobileMenuOpen && (
                    <div className="border-b border-zinc-200 bg-white px-4 py-3 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`rounded-md px-3 py-2 text-sm font-medium ${
                                            active
                                                ? 'bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white'
                                                : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex w-full items-center justify-center rounded-lg bg-zinc-900 py-2 text-center text-xs font-medium text-white dark:bg-white dark:text-zinc-950"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Global Flash Alerts */}
            {flash?.success && (
                <div className="border-b border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-center text-xs font-medium text-emerald-800 dark:text-emerald-300">
                    <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
                        <svg
                            className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>{flash.success}</span>
                    </div>
                </div>
            )}

            {flash?.error && (
                <div className="border-b border-rose-500/20 bg-rose-500/10 px-4 py-3 text-center text-xs font-medium text-rose-800 dark:text-rose-300">
                    <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
                        <svg
                            className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>{flash.error}</span>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <main className="flex-1">{children}</main>

            {/* Minimalist Modern Footer */}
            <footer className="border-t border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        {/* Brand info */}
                        <div className="max-w-xs space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">
                                    <svg
                                        className="h-3 w-3"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <polygon points="12 2 19 21 12 17 5 21 12 2" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                                    Lumina
                                </span>
                            </div>
                            <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                                Autonomous telemetry & intelligent developer
                                infrastructure for high-velocity teams.
                            </p>
                        </div>

                        {/* Navigation links */}
                        <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                            >
                                Twitter
                            </a>
                        </div>

                        {/* System status badge */}
                        <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            <span>All systems operational</span>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-zinc-100 pt-6 text-center text-xs text-zinc-400 dark:border-zinc-900 dark:text-zinc-500">
                        &copy; {new Date().getFullYear()} Lumina Technologies
                        Inc. Powered by Laravel 13 & SQLite.
                    </div>
                </div>
            </footer>
        </div>
    );
}
