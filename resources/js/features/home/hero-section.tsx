'use client';

import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/shadcn/carousel';
import { News } from '@/constants/news';
import Autoplay from 'embla-carousel-autoplay';
import { TypeOfNews } from '@/features/news-service/data/news';

const HeroSection = () => {
    const data = News;

    const latestNews = [...data]
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 6);

    return (
        <Section id={'hero'} className="h-screen w-full">
            <div className="relative h-full w-full py-8 md:py-12 lg:py-16">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-black/20" />

                <video autoPlay muted loop playsInline className="absolute inset-0 z-0 h-full w-full object-cover">
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <MaxWidthWrapper className="relative z-20 h-full">
                    <div className="flex h-full w-full items-end justify-center">
                        <div className="z-10 inline-flex w-full flex-col items-center justify-center gap-y-4 md:gap-y-6 lg:gap-y-8">
                            <div className="flex flex-col items-center justify-start gap-y-2 md:gap-y-3 lg:gap-y-4">
                                <img
                                    width={200}
                                    height={200}
                                    src="/brand/logo.png"
                                    alt="background-hero"
                                    className="size-16 md:size-32 lg:size-48"
                                />
                                <h1 className="text-center text-sm font-bold text-white uppercase md:text-xl lg:text-3xl">
                                    KELUARGA MUFADHILLAH
                                </h1>
                            </div>

                            <Carousel
                                className="mx-auto w-full max-w-full px-4 md:max-w-4xl lg:max-w-6xl"
                                plugins={[
                                    Autoplay({
                                        delay: 3000,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                                opts={{
                                    loop: true,
                                    align: 'start',
                                    slidesToScroll: 1,
                                }}
                            >
                                <CarouselContent>
                                    {latestNews.map((news: TypeOfNews) => (
                                        <CarouselItem
                                            key={news.id}
                                            className="basis-full px-2 md:basis-1/2 lg:basis-1/3"
                                        >
                                            <Card className="relative m-0 h-48 overflow-hidden rounded-lg border-none p-0 md:h-56 lg:h-64">
                                                <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black/80 to-black/0" />
                                                <div className="absolute h-full w-full overflow-hidden">
                                                    <img
                                                        src={news.image || `/images/placeholder.jpg`}
                                                        alt={news.name}
                                                        className="h-full w-full object-cover object-top"
                                                    />
                                                </div>
                                                <CardContent className="z-10 mb-4 flex h-full flex-col items-center justify-end px-3 md:mb-5 lg:mb-6">
                                                    <h1 className="line-clamp-2 text-base font-medium text-white md:text-lg lg:text-xl">
                                                        {news.name}
                                                    </h1>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <CarouselPrevious className="ml-0 hidden cursor-pointer border-0 bg-white/30 p-4 text-white hover:bg-white/50 hover:text-white md:flex md:p-5 lg:p-6" />
                                <CarouselNext className="mr-0 hidden cursor-pointer border-0 bg-white/30 p-4 text-white hover:bg-white/50 hover:text-white md:flex md:p-5 lg:p-6" />
                            </Carousel>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </Section>
    );
};

export { HeroSection };