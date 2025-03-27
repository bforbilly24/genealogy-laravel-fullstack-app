'use client';

import { HistorySection } from '@/features/history/history-section';
import { MainLayout } from '@/layouts/main-layout';
import React from 'react';

const History: React.FC = () => {
    return (
        <MainLayout title="History">
            <HistorySection />
        </MainLayout>
    );
};

export default History;
