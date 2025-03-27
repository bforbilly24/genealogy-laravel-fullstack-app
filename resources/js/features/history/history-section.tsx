import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';
import { Timeline } from '@/components/ui/aceternity/timeline';
import { HISTORY } from '@/constants/history';
import { ReactElement } from 'react';
import { ContentDivProps, InnerDivProps } from './data/history';

const HistorySection = () => {
    const limitImages = (content: ReactElement<ContentDivProps>): ReactElement => {
        const childrenArray = content.props.children.props.children as ReactElement<InnerDivProps>['props']['children'];
        const images = childrenArray
            .filter((child): child is ReactElement => typeof child === 'object' && child !== null && 'type' in child && child.type === 'img')
            .slice(0, 4);
        const text = childrenArray.find(
            (child): child is ReactElement => typeof child === 'object' && child !== null && 'type' in child && child.type === 'p',
        );

        return (
            <div>
                <div className={`grid ${images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                    {text}
                    {images}
                </div>
            </div>
        );
    };

    const limitedData = HISTORY.map((item) => ({
        ...item,
        content: limitImages(item.content),
    }));

    return (
        <Section id={'history'} className="relative mx-auto bg-amber-50 dark:bg-transparent lg:py-32 md:py-16 py-8">
            <img src="/images/global/pattern-1.png" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <MaxWidthWrapper className='relative'>
                <div className="flex flex-col items-start justify-center gap-y-8">
                    <div className="flex w-full flex-col items-start justify-center gap-y-4">
                        <h1 className="text-primary max-w-xs text-2xl font-medium tracking-[0.4rem] md:text-3xl md:tracking-[0.5rem] lg:text-4xl lg:tracking-[0.6rem]">
                            Keluarga Besar Bani Mufadhillah
                        </h1>
                        <div className="max-w-7xl">
                            <p className="max-w-sm text-sm text-neutral-700 md:text-base dark:text-neutral-300">
                                Berikut adalah perjalanan sejarah Keluaraga Bani Mufadhillah dari awal hingga era modern.
                            </p>
                        </div>
                    </div>
                    <Timeline data={limitedData} />
                </div>
            </MaxWidthWrapper>
        </Section>
    );
};

export { HistorySection };
