import { Footer } from '@/components/footer/footer';
import ConsoleLogger from '@/components/miscellaneous/console-logger';
import ScrollToAnchor from '@/components/miscellaneous/scroll-to-anchor';
import { Navbar } from '@/components/navigation/navbar';
import { Head } from '@inertiajs/react';
import React, { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords }) => {
    const defaultDescription = 'Telusuri Silsilah Bani Mufadhillah - Dokumentasi dan Warisan Sejarah Keluarga Mufadhillah';
    const defaultKeywords =
        'silsilah keluarga, bani mufadhillah, pohon keluarga, sejarah keluarga, genealogi, asal usul keluarga, catatan keluarga, warisan keluarga';

    return (
        <>
            <Head>
                <title>{title ? `${title} | Bani MUFADHILLAH` : 'Bani MUFADHILLAH'}</title>
                <meta name="description" content={description || defaultDescription} />
                <meta name="keywords" content={keywords || defaultKeywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Bani MUFADHILLAH" />
                <meta property="og:title" content={title ? `${title} | Bani MUFADHILLAH` : 'Bani MUFADHILLAH'} />
                <meta property="og:description" content={description || defaultDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Bani MUFADHILLAH" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title ? `${title} | Bani MUFADHILLAH` : 'Bani MUFADHILLAH'} />
                <meta name="twitter:description" content={description || defaultDescription} />
                <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            <main className="scrollbar-hide size-full overflow-x-hidden">{children}</main>
            <ScrollToAnchor />
            <Footer />
            <ConsoleLogger />
        </>
    );
};

export { MainLayout };
