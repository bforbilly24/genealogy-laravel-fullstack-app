'use client';

import { AboutUsSection } from '@/features/home/about-us-section';
import { HeroSection } from '@/features/home/hero-section';
import { HistorySection } from '@/features/home/history-section';
import { NewsSection } from '@/features/home/news-section';
import { QuotesSection } from '@/features/home/quotes-section';
import { VisionMissionSection } from '@/features/home/vision-mission-section';
// import { VisitSection } from '@/features/home/visit-section';
import { MainLayout } from '@/layouts/main-layout';
import React from 'react';

const Home: React.FC = () => {
    return (
        <MainLayout title="Home">
            <HeroSection />
            <HistorySection />
            <AboutUsSection />
            <NewsSection />
            {/* <VisitSection /> */}
            <VisionMissionSection />
            <QuotesSection />
        </MainLayout>
    );
};

export default Home;
