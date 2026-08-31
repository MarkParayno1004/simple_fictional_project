export type * from './auth';

export interface SharedProps {
    name: string;
    auth: {
        user: import('./auth').User | null;
    };
    flash?: {
        success?: string | null;
        error?: string | null;
    };
    [key: string]: unknown;
}

export interface StatItem {
    value: string;
    label: string;
    description: string;
}

export interface FeatureItem {
    title: string;
    description: string;
    tag: string;
    icon: string;
}

export interface TestimonialItem {
    quote: string;
    author: string;
    role: string;
    company: string;
}

export interface MissionData {
    headline: string;
    subheadline: string;
    story: string;
}

export interface ValueItem {
    title: string;
    description: string;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    initials: string;
}

export interface Milestone {
    year: string;
    title: string;
    description: string;
}

export interface ContactInfo {
    email: string;
    support: string;
    press: string;
    location: string;
    response_time: string;
    office_hours: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface RecentMessage {
    id: number;
    name: string;
    subject: string;
    created_at: string;
}
