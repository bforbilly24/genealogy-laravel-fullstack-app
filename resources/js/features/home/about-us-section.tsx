import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';
import { InteractiveHoverButton } from '@/components/ui/magicui/interactive-hover-button';

const AboutUsSection = () => {
    return (
        <Section
            id={'about-us'}
            className="relative mx-auto flex flex-col gap-y-12 bg-amber-50 dark:bg-transparent lg:py-32 md:py-16 py-8"
        >
            <img src="/images/global/pattern-1.png" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <MaxWidthWrapper className="relative flex items-center justify-center md:h-full lg:h-[30rem]">
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
                    <div className="order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:order-none lg:order-none">
                        <div className="relative col-span-1 h-60 overflow-hidden rounded-lg sm:h-full">
                            <img src="/images/home/about-us-4.png" alt="about-us-1" className="h-full w-full object-cover" />
                            <div className="absolute right-0 bottom-0 left-0 z-10 h-full bg-gradient-to-t from-black/80 to-black/20 p-2">
                                <div className="flex h-full items-end justify-center">
                                    <p className="text-center text-base font-medium text-white sm:text-lg md:text-xl">BANI Mufadhillah</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:grid-rows-2">
                            <div className="relative h-44 overflow-hidden rounded-lg sm:h-full">
                                <img src="/images/home/about-us-2.png" alt="about-us-2" className="h-full w-full object-cover" />
                                <div className="absolute right-0 bottom-0 left-0 z-10 h-full bg-gradient-to-t from-black/80 to-black/20 p-2">
                                    <div className="flex h-full items-end justify-center">
                                        <p className="text-center text-base font-medium text-white sm:text-lg md:text-xl">Foto Keluarga</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-44 overflow-hidden rounded-lg bg-amber-200 sm:h-full">
                                <img
                                    src="/images/home/about-us-3.png"
                                    alt="about-us-3"
                                    className="h-full w-full rounded-lg object-cover mix-blend-multiply"
                                />
                                <div className="absolute right-0 bottom-0 left-0 z-10 h-full bg-gradient-to-t from-black/80 to-black/20 p-2">
                                    <div className="flex h-full items-end justify-center">
                                        <p className="text-center text-base font-medium text-white sm:text-lg md:text-xl">Logo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text content section */}
                    <div className="relative z-10 flex flex-col items-start justify-center gap-y-6 md:order-2 md:gap-y-8 lg:order-none">
                        <div className="flex flex-col items-start justify-start gap-y-3 md:gap-y-4">
                            <h1 className="text-2xl font-medium tracking-[0.4rem] md:text-3xl md:tracking-[0.5rem] lg:text-4xl lg:tracking-[0.6rem]">
                                Tentang Kami
                            </h1>
                            <p className="text-justify text-base tracking-normal md:text-lg">
                                Situs web resmi keluarga besar Bani Mufadhillah (Mbah Munajat & Mbah Fadhillah) ini menyajikan berbagai informasi
                                terkait silsilah keluarga, sejarah keturunan, dan jejak perjuangan yang telah diwariskan oleh leluhur kami. Melalui
                                situs ini, kami berusaha untuk menjaga dan memperkenalkan nilai-nilai luhur yang telah membentuk identitas keluarga,
                                serta mempererat tali silaturahmi antar anggota keluarga besar Bani Mufadhillah.
                            </p>
                        </div>
                        <InteractiveHoverButton
                            onClick={() => {}}
                            className="border-primary rounded-lg border bg-transparent text-sm uppercase md:text-base"
                        >
                            Info Selengkapnya
                        </InteractiveHoverButton>
                    </div>
                </div>
            </MaxWidthWrapper>
        </Section>
    );
};

export { AboutUsSection };
