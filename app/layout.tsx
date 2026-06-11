import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import '@/index.css';
import '@/scss/main.scss';

export const metadata: Metadata = {
    title: 'Cinema Box',
    description: 'Movie and TV discovery app',
    icons: {
        icon: '/box.svg'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
