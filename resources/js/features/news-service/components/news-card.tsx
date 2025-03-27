'use client';

import { Badge } from '@/components/ui/shadcn/badge';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/shadcn/pagination';
import { TypeOfNews } from '@/features/news-service/data/news';
import { formatDate } from '@/utils/format-date';
import { generateSlug } from '@/utils/generate-slug';
import { router } from '@inertiajs/react';
import { BookOpenText, CircleUser, Clock } from 'lucide-react';
import { useState } from 'react';

interface NewsCardProps {
    data: TypeOfNews[];
    variant?: 'card-c' | 'card-a' | 'card-b';
    itemsPerPage?: number;
    showPagination?: boolean;
    gridClass?: string;
    gapClass?: string;
}

function NewsCard({ data, variant = 'card-c', itemsPerPage = 6, showPagination = true, gridClass, gapClass }: NewsCardProps) {
    const [currentPage, setCurrentPage] = useState(1);

    if (!data || !data.length) {
        return <p className="w-full text-center text-sm text-gray-500">Tidak ada berita untuk ditampilkan.</p>;
    }

    const sortedData = [...data].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const newsToDisplay = showPagination
        ? sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : sortedData.slice(0, itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const renderPaginationItems = () => {
        const items = [];
        const maxVisiblePages = variant === 'card-c' ? 6 : 4;
        let startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let page = startPage; page <= endPage; page++) {
            items.push(
                <PaginationItem key={page}>
                    <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageClick(page);
                        }}
                    >
                        {page}
                    </PaginationLink>
                </PaginationItem>,
            );
        }

        if (startPage > 1) {
            items.unshift(
                <PaginationItem key="start-ellipsis">
                    <PaginationEllipsis />
                </PaginationItem>,
            );
            items.unshift(
                <PaginationItem key="page-1">
                    <PaginationLink
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageClick(1);
                        }}
                    >
                        1
                    </PaginationLink>
                </PaginationItem>,
            );
        }

        if (endPage < totalPages) {
            items.push(
                <PaginationItem key="end-ellipsis">
                    <PaginationEllipsis />
                </PaginationItem>,
            );
            items.push(
                <PaginationItem key={`page-${totalPages}`}>
                    <PaginationLink
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageClick(totalPages);
                        }}
                    >
                        {totalPages}
                    </PaginationLink>
                </PaginationItem>,
            );
        }

        return items;
    };

    const handleCardClick = (slug: string) => {
        router.visit(`/berita/${slug}`);
    };

    const renderCard = (news: TypeOfNews) => {
        const slug = generateSlug(news.name);
        const formattedDate = formatDate(news.created_at).formattedDate;

        if (variant === 'card-a') {
            return (
                <Card
                    key={news.id}
                    className="flex cursor-pointer flex-col items-start gap-y-4 overflow-hidden rounded-lg border-none bg-transparent p-0 shadow-none transition-all duration-200 hover:bg-gray-50 md:gap-y-6 md:p-3 lg:flex-row lg:gap-y-6 lg:p-4 dark:hover:bg-green-950"
                    onClick={() => handleCardClick(slug)}
                >
                    <div className="relative h-24 w-full min-w-[100px] md:h-32 md:w-full lg:h-40 lg:w-1/3">
                        <img
                            src={news.image}
                            alt={news.name}
                            className="h-full w-full rounded-md object-cover"
                            sizes="(max-width: 768px) 33vw, 100vw"
                        />

                        <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-start gap-x-1 bg-gradient-to-t from-black/40 to-black/30 p-2 md:hidden *:lg:hidden">
                            {news.user?.photo ? (
                                <img
                                    src={news.user.photo}
                                    alt={news.user.name}
                                    width={20}
                                    height={20}
                                    className="rounded-full border border-gray-300 object-cover md:size-5 lg:size-6"
                                />
                            ) : (
                                <CircleUser className="text-foreground h-5 w-5 md:h-6 md:w-6" />
                            )}
                            <p className="line-clamp-1 text-xs text-white capitalize md:text-sm lg:text-base">{news.user?.name || 'Unknown'}</p>
                        </div>
                    </div>

                    <CardContent className="flex h-full w-full flex-col gap-y-1 px-0 md:w-full md:gap-y-2 lg:w-2/3 lg:gap-y-3">
                        <div className="hidden w-full items-center justify-between sm:flex">
                            <Badge className="dark:text-foreground bg-green-200 text-xs text-gray-500 md:text-sm lg:text-base dark:bg-green-600">
                                {news.category}
                            </Badge>
                            <div className="flex items-center gap-x-1">
                                <Clock className="text-foreground size-3 md:size-4 lg:size-5" />
                                <p className="text-foreground text-xs md:text-sm lg:text-base">{formattedDate}</p>
                            </div>
                            <div className="flex max-w-16 items-center gap-x-1 md:max-w-24 lg:max-w-32">
                                {news.user?.photo ? (
                                    <img
                                        src={news.user.photo}
                                        alt={news.user.name}
                                        width={24}
                                        height={24}
                                        className="border-foreground size-4 rounded-full border object-cover md:size-5 lg:size-6"
                                    />
                                ) : (
                                    <CircleUser className="text-foreground size-3 md:size-4 lg:size-5" />
                                )}
                                <p className="text-foreground line-clamp-1 text-xs capitalize md:text-sm lg:text-base">
                                    {news.user?.name || 'Unknown'}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <div className="flex w-full items-center justify-between sm:hidden">
                                <Badge className="dark:text-foreground bg-green-200 text-xs text-gray-500 md:text-sm lg:text-base dark:bg-green-600">
                                    {news.category}
                                </Badge>
                                <div className="flex items-center justify-center gap-x-1 sm:hidden">
                                    <Clock className="text-foreground hidden h-3 w-3 md:flex md:h-4 md:w-4 lg:flex" />
                                    <p className="text-foreground text-xs">{formattedDate}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-1 flex h-24 flex-col gap-y-2 md:mt-2 md:h-20 md:gap-y-3 lg:mt-2 lg:h-32 lg:gap-y-4">
                            <h5 className="line-clamp-2 text-base leading-tight font-medium md:text-base lg:text-xl">{news.name}</h5>
                            <p className="text-foreground line-clamp-3 text-xs leading-snug md:line-clamp-3 md:text-sm lg:line-clamp-3 lg:text-base">
                                {news.description}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            );
        } else if (variant === 'card-b') {
            return (
                <Card
                    key={news.id}
                    className="hover:bg-background flex cursor-pointer flex-row items-start justify-center gap-x-2 overflow-hidden rounded-lg border-none bg-transparent p-0 shadow-none transition-all duration-200 ease-in-out hover:-translate-y-1 hover:p-2 hover:shadow-lg md:gap-x-4 md:p-2 lg:gap-x-4 lg:p-0 dark:hover:bg-green-950 dark:hover:p-2"
                    onClick={() => handleCardClick(slug)}
                >
                    <div className="relative h-24 w-3/4 min-w-[80px] md:h-24 md:w-full lg:h-28 lg:w-1/3">
                        <img
                            src={news.image}
                            alt={news.name}
                            className="h-full w-full rounded-md object-cover"
                            sizes="(max-width: 768px) 33vw, 100vw"
                        />

                        <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-start gap-x-1 bg-gradient-to-t from-black/40 to-black/30 p-1 md:hidden *:lg:hidden">
                            {news.user?.photo ? (
                                <img
                                    src={news.user.photo}
                                    alt={news.user.name}
                                    width={16}
                                    height={16}
                                    className="rounded-full border border-gray-300 object-cover md:size-4 lg:size-5"
                                />
                            ) : (
                                <CircleUser className="text-foreground h-4 w-4 md:h-5 md:w-5" />
                            )}
                            <p className="line-clamp-1 text-[10px] text-white capitalize md:text-xs lg:text-sm">{news.user?.name || 'Unknown'}</p>
                        </div>
                    </div>

                    <CardContent className="flex h-full w-full flex-col items-center justify-between gap-y-1 px-0 md:w-full md:gap-y-1 lg:w-2/3 lg:gap-y-2">
                        <div className="flex w-full flex-col items-start justify-center gap-y-2">
                            <Badge className="dark:text-foreground bg-green-200 text-xs text-gray-500 md:text-sm lg:text-sm dark:bg-green-600">
                                {news.category}
                            </Badge>
                            <div className="flex w-full flex-row items-center justify-between">
                                <div className="flex items-center gap-x-1">
                                    <Clock className="text-foreground size-2 md:size-3 lg:size-4" />
                                    <p className="text-foreground text-[10px] md:text-xs lg:text-sm">{formattedDate}</p>
                                </div>
                                <div className="hidden max-w-12 items-center gap-x-1 md:flex md:max-w-20 lg:flex lg:max-w-24">
                                    {news.user?.photo ? (
                                        <img
                                            src={news.user.photo}
                                            alt={news.user.name}
                                            width={20}
                                            height={20}
                                            className="border-foreground size-3 rounded-full border object-cover md:size-4 lg:size-5"
                                        />
                                    ) : (
                                        <CircleUser className="text-foreground size-2 md:size-3 lg:size-4" />
                                    )}
                                    <p className="text-foreground line-clamp-1 text-[10px] capitalize md:text-xs lg:text-sm">
                                        {news.user?.name || 'Unknown'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-12 flex-col gap-y-1 md:h-12 md:gap-y-2 lg:h-12 lg:gap-y-3">
                            <h5 className="line-clamp-2 text-sm leading-tight font-medium md:text-sm lg:text-lg">{news.name}</h5>
                        </div>
                    </CardContent>
                </Card>
            );
        } else if (variant === 'card-c') {
            return (
                <Card
                    key={news.id}
                    className="hover:bg-background flex flex-col items-start gap-y-4 overflow-hidden rounded-lg border-0 bg-slate-50/20 p-0 shadow-sm transition-colors duration-200 hover:shadow-lg md:p-4 lg:p-4 dark:bg-green-950/20 dark:hover:bg-green-950"
                >
                    <div className="relative h-40 w-full min-w-[100px] md:h-40 md:w-full lg:h-60 lg:w-full">
                        <img
                            src={news.image}
                            alt={news.name}
                            className="h-full w-full overflow-hidden rounded-lg object-cover"
                            sizes="(max-width: 768px) 33vw, 100vw"
                        />
                    </div>

                    <CardContent className="flex w-full flex-col gap-y-2 p-0 md:gap-y-2 lg:gap-y-3">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex max-w-24 items-center gap-x-1 md:max-w-24 lg:max-w-32">
                                {news.user?.photo ? (
                                    <img
                                        src={news.user.photo}
                                        alt={news.user.name}
                                        width={24}
                                        height={24}
                                        className="border-foreground size-4 rounded-full border object-cover md:size-5 lg:size-6"
                                    />
                                ) : (
                                    <CircleUser className="text-foreground size-4 md:size-4 lg:size-4" />
                                )}
                                <p className="text-foreground line-clamp-1 text-sm capitalize md:text-sm lg:text-sm">
                                    {news.user?.name || 'Unknown'}
                                </p>
                            </div>
                            <div className="flex items-center gap-x-1">
                                <Clock className="text-foreground size-4 md:size-4 lg:size-4" />
                                <p className="text-foreground text-sm md:text-sm lg:text-sm">{formattedDate}</p>
                            </div>
                        </div>

                        <div className="mt-1 flex h-24 flex-col gap-y-3 md:mt-2 md:h-20 md:gap-y-2 lg:mt-3 lg:h-24 lg:gap-y-3">
                            <h5 className="line-clamp-2 text-lg leading-tight font-medium md:line-clamp-1 md:text-base lg:line-clamp-1 lg:text-xl">
                                {news.name}
                            </h5>
                            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug md:line-clamp-3 md:text-sm lg:line-clamp-3 lg:text-base">
                                {news.description}
                            </p>
                        </div>

                        <div className="mt-4 flex flex-row items-center justify-between">
                            <Badge className="dark:text-foreground bg-green-200 text-xs text-gray-500 md:text-sm lg:text-sm dark:bg-green-600">
                                {news.category}
                            </Badge>

                            <Button
                                size="lg"
                                className="text-foreground hover:text-muted-foreground h-full w-fit bg-transparent text-sm shadow-none hover:bg-transparent md:text-sm lg:text-base"
                                onClick={() => router.visit(`/berita/${slug}`)}
                            >
                                Baca Lebih Lanjut
                                <BookOpenText className="ml-1 size-4 md:size-5 lg:size-5" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            );
        }
    };

    const defaultGridClass =
        variant === 'card-c'
            ? 'md:grid-cols-2 lg:grid-cols-3'
            : variant === 'card-a'
              ? 'md:grid-cols-2 lg:grid-cols-2'
              : 'md:grid-cols-3 lg:grid-cols-4';

    const defaultGapClass = 'gap-4 md:gap-6 lg:gap-8';

    return (
        <div className="flex w-full flex-col items-center justify-center gap-y-4 md:gap-y-6 lg:gap-y-8">
            <div className={`group grid w-full grid-cols-1 ${gapClass || defaultGapClass} ${gridClass || defaultGridClass}`}>
                {newsToDisplay.map((news) => renderCard(news))}
            </div>

            {showPagination && totalPages > 1 && (
                <div className="mt-4 flex w-full items-center justify-center md:mt-6 lg:mt-8">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePrevious();
                                    }}
                                    className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : ''} h-8 w-fit md:h-10 lg:h-12`}
                                />
                            </PaginationItem>
                            {renderPaginationItems()}
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNext();
                                    }}
                                    className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} h-8 md:h-10 lg:h-12 lg:w-fit`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}

export { NewsCard };
