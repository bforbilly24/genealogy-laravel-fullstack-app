'use client';

import { NewsSection } from '@/features/news-service/news-section';
import { MainLayout } from '@/layouts/main-layout';
import React from 'react';

const News: React.FC = () => {
    return (
        <MainLayout title="News">
            <NewsSection />
        </MainLayout>
    );
};

export default News;
