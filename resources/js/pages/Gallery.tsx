'use client';

import { GallerySection } from '@/features/gallery/gallery-section';
import { MainLayout } from '@/layouts/main-layout';
import React from 'react';

const Gallery: React.FC = () => {
    return (
        <MainLayout title="Gallery">
            <GallerySection />
        </MainLayout>
    );
};

export default Gallery;
