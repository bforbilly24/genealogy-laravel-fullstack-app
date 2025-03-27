// GallerySection.tsx
'use client';
import { GetGallery } from '@/actions/get-gallery';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';
import { Loader } from '@/components/loader/loader';
import { GalleryFocusCards } from '@/features/gallery/components/gallery-focus-cards';
import { galleryManager } from '@/features/gallery/patterns/gallery-manager';
import { useEffect, useState } from 'react';

const GallerySection = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGallery = async () => {
            setLoading(true);
            const { cards: fetchedCards, error: fetchError } = await GetGallery();
            if (!fetchError) {
                galleryManager.setCards(fetchedCards);
            }
            setError(fetchError);
            setLoading(false);
        };

        loadGallery();
    }, []);

    const cards = galleryManager.getCards(); // Ambil dari singleton

    if (loading) {
        return (
            <Section className="relative h-full w-full bg-amber-50 py-8 md:py-16 lg:py-32 dark:bg-transparent">
                <MaxWidthWrapper>
                    <div className="flex h-64 items-center justify-center">
                        <Loader />
                    </div>
                </MaxWidthWrapper>
            </Section>
        );
    }

    if (error) {
        return (
            <Section className="relative h-full w-full bg-amber-50 py-8 md:py-16 lg:py-32 dark:bg-transparent">
                <MaxWidthWrapper>
                    <div className="text-center text-red-500">{error}</div>
                </MaxWidthWrapper>
            </Section>
        );
    }

    return (
        <Section id="news-&-service" className="relative h-full w-full bg-amber-50 py-8 md:py-16 lg:py-32 dark:bg-transparent">
            <img src="/images/global/pattern-1.png" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <div className="relative h-full w-full">
                <MaxWidthWrapper className="relative z-20">
                    <div className="flex flex-col items-center justify-between gap-y-8">
                        <div className="flex w-full flex-col items-center justify-center gap-y-4">
                            <h1 className="text-primary max-w-md text-center text-2xl font-medium tracking-[0.4rem] md:text-3xl md:tracking-[0.5rem] lg:text-4xl lg:tracking-[0.6rem]">
                                Keluarga Bani Mufadhillah
                            </h1>
                            <p className="text-sm text-neutral-700 md:text-base dark:text-neutral-300">
                                Berikut adalah dokumentasi Keluarga Bani Mufadhillah dari awal hingga era modern.
                            </p>
                        </div>
                        <GalleryFocusCards cards={cards} />
                    </div>
                </MaxWidthWrapper>
            </div>
        </Section>
    );
};

export { GallerySection };
