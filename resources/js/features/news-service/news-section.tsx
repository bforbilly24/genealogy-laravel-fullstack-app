'use client';

import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';
import { Badge } from '@/components/ui/shadcn/badge';
import { News } from '@/constants/news';
import { NewsCard } from '@/features/news-service/components/news-card';
import { cn } from '@/lib/cn';
import { formatDate } from '@/utils/format-date';
import { generateSlug } from '@/utils/generate-slug';
import { router } from '@inertiajs/react';
import { Clock } from 'lucide-react';
import { useState } from 'react';

const FALLBACK_IMAGE = '/images/placeholder.jpg';

const NewsSection = () => {
    const sortedByDate = [...News].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    const latestNews = sortedByDate[0];
    const cardCItems = sortedByDate.slice(1, 4);
    const cardAItems = sortedByDate.slice(4);

    const formattedDate = formatDate(latestNews.created_at).formattedDate;
    const [backgroundImage, setBackgroundImage] = useState(latestNews.image || FALLBACK_IMAGE);

    const handleImageError = () => {
        setBackgroundImage(FALLBACK_IMAGE);
    };

    const handleCardClick = () => {
        const slug = generateSlug(latestNews.name);
        router.visit(`/berita/${slug}`);
    };

    return (
        <Section id={'news-&-service'} className="relative h-full w-full bg-slate-50 dark:bg-transparent lg:py-32 md:py-16 py-8">
            <img src="/images/global/pattern-1.png" className="absolute inset-0 z-0 h-full w-full object-cover" />

            <div className="relative h-full w-full">
                <MaxWidthWrapper className="relative z-20 h-full">
                    <div className="flex flex-col items-start justify-center gap-y-4 md:gap-y-6 lg:gap-y-8">
                        <div className="flex w-full flex-col items-start justify-center gap-y-4">
                            <h1 className="text-primary max-w-xs text-2xl font-medium tracking-[0.4rem] md:text-3xl md:tracking-[0.5rem] lg:text-4xl lg:tracking-[0.6rem]">
                                Berita Terbaru
                            </h1>
                            <div className="max-w-7xl">
                                <p className="max-w-sm text-sm text-neutral-700 md:text-base dark:text-neutral-300">
                                    Berikut adalah perjalanan sejarah Kraton Yogyakarta dari awal hingga era modern.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-5 lg:gap-8">
                            <div className="col-span-1 md:col-span-1 lg:col-span-3">
                                <div className="group/card w-full">
                                    <button
                                        onClick={handleCardClick}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                handleCardClick();
                                            }
                                        }}
                                        className={cn(
                                            'card backgroundImage relative mx-auto flex h-72 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-md p-3 shadow-xl md:h-80 md:p-4 lg:h-96 lg:p-5',
                                            'bg-cover',
                                        )}
                                        style={{
                                            backgroundImage: `url(${backgroundImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <img src={latestNews.image} alt="" className="hidden" onError={handleImageError} />

                                        <div className="absolute top-0 left-0 h-full w-full opacity-60 transition duration-300 group-hover/card:bg-black"></div>
                                        <div className="z-10 flex flex-row items-center space-x-3 md:space-x-4">
                                            <img
                                                height="100"
                                                width="100"
                                                alt="Avatar"
                                                src={latestNews.user?.photo || '/manu.png'}
                                                className="h-8 w-8 rounded-full border-2 object-cover md:h-10 md:w-10 lg:h-12 lg:w-12"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/manu.png';
                                                }}
                                            />
                                            <div className="flex flex-col">
                                                <p className="relative z-10 text-sm font-normal text-gray-50 md:text-base lg:text-lg">
                                                    {latestNews.user?.name || 'Manu Arora'}
                                                </p>
                                                <p className="text-xs text-gray-400 md:text-sm lg:text-base">2 min read</p>
                                            </div>
                                        </div>

                                        <div className="mb-3 flex flex-col items-start justify-center gap-y-2 md:mb-4 md:gap-y-3 lg:mb-5 lg:gap-y-4">
                                            <div className="flex flex-row gap-x-2 md:gap-x-3 lg:gap-x-4">
                                                <Badge className="text-foreground relative z-10 bg-green-200 text-xs md:text-sm lg:text-base dark:bg-green-600">
                                                    {latestNews.category}
                                                </Badge>
                                                <div className="flex items-center gap-x-1">
                                                    <Clock className="relative z-10 size-3 text-white md:size-4 lg:size-5" />
                                                    <p className="relative z-10 text-xs text-white md:text-sm lg:text-base">{formattedDate}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-y-2 md:gap-y-3 lg:gap-y-4">
                                                <h1 className="relative z-10 line-clamp-1 text-start text-lg font-semibold text-gray-50 md:text-xl lg:text-2xl">
                                                    {latestNews.name}
                                                </h1>
                                                <p className="relative z-10 line-clamp-2 text-start text-xs font-normal text-gray-50 md:line-clamp-3 md:text-sm lg:text-base">
                                                    {latestNews.description}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-1 lg:col-span-2">
                                <NewsCard
                                    data={cardCItems}
                                    variant="card-b"
                                    itemsPerPage={3}
                                    showPagination={false}
                                    gridClass="grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
                                    gapClass="gap-4"
                                />
                            </div>
                        </div>

                        <NewsCard data={cardAItems} variant="card-c" itemsPerPage={6} showPagination={true} />
                    </div>
                </MaxWidthWrapper>
            </div>
        </Section>
    );
};

export { NewsSection };
