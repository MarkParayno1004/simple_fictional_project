import { useState, type FormEvent } from 'react';
import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/AppLayout';
import type { ContactInfo, FaqItem, RecentMessage } from '@/types';

interface ContactProps {
    contactInfo: ContactInfo;
    faqs: FaqItem[];
    totalInquiriesCount: number;
    recentMessages: RecentMessage[];
}

export default function Contact({
    contactInfo,
    faqs,
    totalInquiriesCount,
    recentMessages,
}: ContactProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <AppLayout title="Contact Us — Lumina">
            {/* Header Section */}
            <section className="border-b border-zinc-200/80 bg-white/50 pt-12 pb-16 sm:pt-20 sm:pb-24 dark:border-zinc-800/80 dark:bg-zinc-950/50">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                            <span>Get in Touch</span>
                        </div>
                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
                            We'd love to hear from you.
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
                            Have questions about our cloud orchestration engine,
                            enterprise SLAs, or custom integrations? Send us a
                            message and our engineering team will respond
                            promptly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Grid: Info & Form */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                        {/* Left Column: Direct Info & Database Telemetry */}
                        <div className="space-y-8 lg:col-span-5">
                            {/* Contact Channels Card */}
                            <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900/40">
                                <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
                                    Direct Channels
                                </h2>
                                <div className="mt-5 space-y-4 text-xs sm:text-sm">
                                    <div>
                                        <div className="text-zinc-500 dark:text-zinc-400">
                                            General Inquiries
                                        </div>
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                                        >
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                    <div>
                                        <div className="text-zinc-500 dark:text-zinc-400">
                                            Engineering Support
                                        </div>
                                        <a
                                            href={`mailto:${contactInfo.support}`}
                                            className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                                        >
                                            {contactInfo.support}
                                        </a>
                                    </div>
                                    <div>
                                        <div className="text-zinc-500 dark:text-zinc-400">
                                            Headquarters
                                        </div>
                                        <div className="font-medium text-zinc-900 dark:text-zinc-200">
                                            {contactInfo.location}
                                        </div>
                                    </div>
                                    <div className="border-t border-zinc-100 pt-3 dark:border-zinc-800">
                                        <div className="text-zinc-500 dark:text-zinc-400">
                                            Response SLA
                                        </div>
                                        <div className="font-medium text-zinc-900 dark:text-zinc-200">
                                            {contactInfo.response_time}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SQLite Live Telemetry Showcase Card */}
                            <div className="rounded-2xl border border-zinc-200 bg-zinc-900 p-6 text-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                        </span>
                                        <span className="text-xs font-semibold text-white">
                                            SQLite Engine Activity
                                        </span>
                                    </div>
                                    <span className="rounded-md bg-zinc-800 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                                        database.sqlite
                                    </span>
                                </div>

                                <div className="mt-4 flex items-baseline gap-2">
                                    <span className="text-2xl font-bold tracking-tight text-white">
                                        {totalInquiriesCount}
                                    </span>
                                    <span className="text-xs text-zinc-400">
                                        total inquiries recorded in database
                                    </span>
                                </div>

                                {/* Recent Messages Preview */}
                                <div className="mt-4 border-t border-zinc-800 pt-3">
                                    <div className="mb-2 font-mono text-[11px] text-zinc-400 uppercase">
                                        Latest Database Entries
                                    </div>
                                    <div className="space-y-2">
                                        {recentMessages.map((msg) => (
                                            <div
                                                key={msg.id}
                                                className="flex items-center justify-between rounded-lg bg-zinc-800/60 px-3 py-2 text-xs"
                                            >
                                                <div className="max-w-[200px] truncate">
                                                    <span className="font-medium text-zinc-200">
                                                        {msg.name}
                                                    </span>
                                                    <span className="block truncate text-[11px] text-zinc-400">
                                                        {msg.subject}
                                                    </span>
                                                </div>
                                                <span className="shrink-0 font-mono text-[10px] text-zinc-500">
                                                    #{msg.id}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interactive Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-xs sm:p-9 dark:border-zinc-800 dark:bg-zinc-900/50">
                                <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                                    Send us a message
                                </h2>
                                <p className="mt-1 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
                                    Fill out the form below. Submissions are
                                    saved directly to our SQLite database.
                                </p>

                                {recentlySuccessful && (
                                    <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-xs font-medium text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-950/30 dark:text-emerald-300">
                                        <div className="flex items-center gap-2">
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
                                            <span>
                                                Your message was successfully
                                                recorded in the SQLite database!
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-6 space-y-5"
                                >
                                    {/* Name Field */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                            placeholder="e.g. Alex Rivera"
                                            className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-xs shadow-2xs transition-colors focus:outline-hidden sm:text-sm ${
                                                errors.name
                                                    ? 'border-rose-400 focus:border-rose-500 dark:border-rose-500'
                                                    : 'border-zinc-200 focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/80 dark:focus:border-zinc-100'
                                            }`}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            placeholder="alex@company.com"
                                            className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-xs shadow-2xs transition-colors focus:outline-hidden sm:text-sm ${
                                                errors.email
                                                    ? 'border-rose-400 focus:border-rose-500 dark:border-rose-500'
                                                    : 'border-zinc-200 focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/80 dark:focus:border-zinc-100'
                                            }`}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Subject Field */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                                        >
                                            Subject / Topic
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={data.subject}
                                            onChange={(e) =>
                                                setData(
                                                    'subject',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="e.g. Enterprise Cloud Deployment"
                                            className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-xs shadow-2xs transition-colors focus:outline-hidden sm:text-sm ${
                                                errors.subject
                                                    ? 'border-rose-400 focus:border-rose-500 dark:border-rose-500'
                                                    : 'border-zinc-200 focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/80 dark:focus:border-zinc-100'
                                            }`}
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={data.message}
                                            onChange={(e) =>
                                                setData(
                                                    'message',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Tell us about your infrastructure requirements or questions..."
                                            className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-xs shadow-2xs transition-colors focus:outline-hidden sm:text-sm ${
                                                errors.message
                                                    ? 'border-rose-400 focus:border-rose-500 dark:border-rose-500'
                                                    : 'border-zinc-200 focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/80 dark:focus:border-zinc-100'
                                            }`}
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="inline-flex w-full items-center justify-center rounded-lg bg-zinc-900 py-3 text-xs font-medium text-white shadow-xs transition hover:bg-zinc-800 active:scale-[0.99] disabled:opacity-50 sm:text-sm dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                                        >
                                            {processing ? (
                                                <span className="flex items-center gap-2">
                                                    <svg
                                                        className="h-4 w-4 animate-spin text-current"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    <span>
                                                        Recording to SQLite
                                                        database...
                                                    </span>
                                                </span>
                                            ) : (
                                                <span>Send Message</span>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="border-t border-zinc-200/80 bg-zinc-50/50 py-16 sm:py-24 dark:border-zinc-800/80 dark:bg-zinc-900/20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                            FAQ
                        </span>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="mt-10 space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={faq.question}
                                    className="rounded-xl border border-zinc-200 bg-white transition dark:border-zinc-800 dark:bg-zinc-950"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFaq(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between px-5 py-4 text-left text-xs font-medium text-zinc-900 sm:text-sm dark:text-zinc-100"
                                    >
                                        <span>{faq.question}</span>
                                        <svg
                                            className={`h-4 w-4 shrink-0 transition-transform ${
                                                isOpen
                                                    ? 'rotate-180 text-zinc-900 dark:text-white'
                                                    : 'text-zinc-400'
                                            }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {isOpen && (
                                        <div className="border-t border-zinc-100 px-5 pt-3 pb-4 text-xs leading-relaxed text-zinc-600 sm:text-sm dark:border-zinc-900 dark:text-zinc-400">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
