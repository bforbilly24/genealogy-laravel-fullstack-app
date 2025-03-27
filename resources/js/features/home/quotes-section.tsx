import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';
import { Marquee } from '@/components/ui/magicui/marquee';
import { QUOTES } from '@/constants/quotes';
import QuoteCard from '@/features/home/components/quote-card';

const QuotesSection = () => {
    const firstRow = QUOTES.slice(0, Math.ceil(QUOTES.length / 2));
    const secondRow = QUOTES.slice(Math.ceil(QUOTES.length / 2));

    return (
        <Section id={'quotes'} className="lg:gap-y-0 bg-slate-50 dark:bg-transparent relative mx-auto flex flex-col py-16 lg:flex-row">
            <img src="/images/global/pattern-1.png" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <MaxWidthWrapper className='relative'>
                <div className="flex flex-col items-center justify-center gap-y-8">
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <h1 className="text-center text-2xl font-light text-foreground uppercase md:text-3xl lg:text-4xl">Kutipan</h1>
                    </div>
                    <div className="relative flex h-fit w-full flex-col items-center justify-center gap-y-5 overflow-hidden">
                        <Marquee pauseOnHover className="![--gap:1.25rem] [--duration:20s]">
                            {firstRow.map((review) => (
                                <QuoteCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="![--gap:1.25rem] [--duration:20s]">
                            {secondRow.map((review) => (
                                <QuoteCard key={review.username} {...review} />
                            ))}
                        </Marquee>

                        <div className="from-background/20 lg:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r"></div>
                        <div className="from-background/20 lg:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l"></div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </Section>
    );
};

export { QuotesSection };
