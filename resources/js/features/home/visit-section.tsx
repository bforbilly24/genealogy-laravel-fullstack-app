'use client';

import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';

const VisitSection = () => {
    return (
        <Section id={'hero'} className="relative bg-slate-50 dark:bg-transparent h-fit w-full py-8 md:py-16">
            <img src="/images/global/pattern-1.png" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <div className="absolute top-0 left-0 z-0 h-48 w-full bg-green-950 md:h-72 md:w-[44rem] md:rounded-r-lg" />
            <MaxWidthWrapper className="relative flex flex-col gap-y-6 md:gap-y-8">
                <div className="flex w-full flex-col items-start justify-center">
                    <h2 className="text-xl text-white capitalize md:text-2xl">Temukan Kami</h2>
                    <h1 className="text-2xl font-medium tracking-[0.4rem] text-yellow-500 md:text-3xl md:tracking-[0.5rem] lg:text-4xl lg:tracking-[0.6rem]">
                        Kunjungan
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                    <div className="md:col-span-3 md:row-span-2">
                        <div className="flex flex-col gap-y-6 md:gap-y-8">
                            <img src="/images/home/content-6.png" className="h-48 w-full overflow-hidden rounded-lg object-cover md:h-60 lg:h-64" />
                            <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:gap-0">
                                <h1 className="text-xl font-medium md:text-2xl">Pariwisata</h1>
                                <p className="max-w-full text-sm md:max-w-md md:text-base">
                                    Selain berfungsi sebagai tempat kediaman Sultan, sebagian area Keraton Yogyakarta dapat dikunjungi oleh publik
                                    sebagai destinasi pariwisata yang dikelola oleh Kawedanan Radya Kartiyasa.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:col-start-4">
                        <div className="relative overflow-hidden rounded-lg">
                            <img src="/images/home/content-8.png" alt="about-us-1" className="h-44 w-full object-cover md:h-56 lg:h-56" />
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-black/20 p-2">
                                <div className="flex h-full w-full flex-col items-start justify-end p-2">
                                    <h2 className="line-clamp-2 text-lg font-medium text-white md:text-xl">Pertunjukan</h2>
                                    <p className="line-clamp-3 text-sm font-light text-white md:text-base">
                                        Berbagai macam agenda pertunjukan seni budaya di Keraton Yogyakarta yang dikelola oleh Kawedanan Krida Mardawa
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:col-start-4 md:row-start-2">
                        <div className="relative overflow-hidden rounded-lg">
                            <img src="/images/home/content-5.png" alt="about-us-1" className="h-44 w-full object-cover md:h-56 lg:h-56" />
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-black/20 p-2">
                                <div className="flex h-full w-full flex-col items-start justify-end p-2">
                                    <h2 className="line-clamp-2 text-lg font-medium text-white md:text-xl">Publik</h2>
                                    <p className="line-clamp-3 text-sm font-light text-white md:text-base">
                                        Urusan publik terkait Keraton Yogyakarta
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </Section>
    );
};

export { VisitSection };
