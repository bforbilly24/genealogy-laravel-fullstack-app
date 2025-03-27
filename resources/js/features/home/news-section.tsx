import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';
import { Button } from '@/components/ui/shadcn/button';
import { News } from '@/constants/news';
import { NewsCard } from '@/features/news-service/components/news-card';
import { ChevronRight } from 'lucide-react';

const NewsSection = () => {
    return (
        <Section id={'news'} className="relative mx-auto flex flex-col gap-y-24 bg-slate-50 py-8 md:py-16 lg:flex-row lg:gap-y-0 dark:bg-transparent">
            <img src="/images/global/pattern-1.png" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <MaxWidthWrapper className="relative">
                <div className="flex flex-col items-center justify-center gap-y-8">
                    <div className="flex w-full flex-col items-start justify-between gap-y-4 md:flex-row md:gap-y-0 lg:flex-row lg:gap-y-0">
                        <div className="flex w-full flex-col items-start justify-center gap-y-4">
                            <h1 className="text-2xl font-medium tracking-[0.4rem] md:text-3xl md:tracking-[0.5rem] lg:text-4xl lg:tracking-[0.6rem]">
                                Berita Terbaru
                            </h1>
                            <p className="text-muted-foreground max-w-3xl text-start text-sm md:text-base lg:text-lg">
                                Rabithah Alawiyah is an Indonesian Islamic organization engaged in social movements. In general, the organization is
                                an exclusive association of Hadhrami people of Ba Alawi sada families.
                            </p>
                        </div>
                        <Button
                            size={'lg'}
                            className="group bg-primary hover:border-primary flex items-center justify-center gap-x-1 text-white uppercase hover:border hover:bg-transparent hover:text-black md:text-base dark:text-black dark:hover:text-white"
                        >
                            Selengkapnya
                            <ChevronRight className="group-hover:text-primary dark:group-hover:text-primary size-5 text-white dark:text-black" />
                        </Button>
                    </div>

                    <NewsCard
                        data={News}
                        variant="card-a"
                        itemsPerPage={4}
                        showPagination={false}
                        gridClass="grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                    />
                </div>
            </MaxWidthWrapper>
        </Section>
    );
};

export { NewsSection };
