import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';
import { Badge } from '@/components/ui/shadcn/badge';
import { News } from '@/constants/news';
import { MainLayout } from '@/layouts/main-layout';
import { formatDate } from '@/utils/format-date';
import { generateSlug } from '@/utils/generate-slug';
import { Link } from '@inertiajs/react';
import { CircleUser, Clock } from 'lucide-react';
import React from 'react';

interface NewsDetailProps {
    slug: string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ slug }) => {
    const newsItem = News.find((news) => generateSlug(news.name) === slug);

    if (!newsItem) {
        return (
            <Section className="relative h-full w-full bg-slate-50 pt-16 dark:bg-transparent">
                <MaxWidthWrapper className="relative z-20 h-full">
                    <div className="flex flex-col items-center justify-center py-16">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Berita Tidak Ditemukan</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Maaf, berita yang Anda cari tidak ditemukan. Silakan kembali ke halaman sebelumnya.
                        </p>
                        <Link href="/berita-&-layanan" className="mt-4 text-blue-600 hover:underline dark:text-blue-400">
                            Kembali ke Berita & Pelayanan
                        </Link>
                    </div>
                </MaxWidthWrapper>
            </Section>
        );
    }

    const formattedDate = formatDate(newsItem.created_at).formattedDate;

    return (
        <MainLayout title="News Detail">
            <Section className="relative h-full w-full bg-slate-50 pt-16 dark:bg-transparent">
                <MaxWidthWrapper className="relative z-20 h-full">
                    <div className="flex flex-col items-start justify-center gap-y-8 py-8 md:py-12 lg:py-16">
                        <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl lg:text-5xl dark:text-gray-200">{newsItem.name}</h1>

                        <div className="flex flex-wrap items-center gap-4">
                            <Badge className="bg-green-200 text-gray-800 dark:bg-green-600 dark:text-white">{newsItem.category}</Badge>
                            <div className="flex items-center gap-x-2">
                                <Clock className="size-4 text-gray-600 dark:text-gray-400" />
                                <p className="text-sm text-gray-600 dark:text-gray-400">{formattedDate}</p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                {newsItem.user?.photo ? (
                                    <img
                                        src={newsItem.user.photo}
                                        alt={newsItem.user.name}
                                        width={24}
                                        height={24}
                                        className="size-6 rounded-full border border-gray-300 object-cover"
                                    />
                                ) : (
                                    <CircleUser className="size-6 text-gray-600 dark:text-gray-400" />
                                )}
                                <p className="text-sm text-gray-600 dark:text-gray-400">{newsItem.user?.name || 'Unknown'}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <img
                                src={newsItem.image}
                                alt={newsItem.name}
                                className="h-96 w-full rounded-lg object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/placeholder.jpg';
                                }}
                            />
                        </div>

                        <div className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
                            <p className="text-gray-700 dark:text-gray-300">{newsItem.description}</p>
                        </div>

                        <Link href="/berita-&-layanan" className="text-blue-600 hover:underline dark:text-blue-400">
                            Kembali ke Berita & Pelayanan
                        </Link>
                    </div>
                </MaxWidthWrapper>
            </Section>
        </MainLayout>
    );
};

export default NewsDetail;
