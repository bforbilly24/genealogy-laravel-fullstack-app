import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';

const VisionMissionSection = () => {
    return (
        <>
            <Section id={'vision'} className="to-primary relative mx-auto flex flex-col bg-gradient-to-t from-green-950 py-8 md:py-16">
                <img src="/images/global/pattern-2.png" className="absolute inset-0 z-0 h-full w-full object-cover" />
                <MaxWidthWrapper className="relative flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
                    <img
                        src="/images/home/vision.jpg"
                        alt="visi"
                        className="h-64 w-full overflow-hidden rounded-2xl object-cover md:h-80 md:w-[32rem]"
                    />
                    <div className="flex w-full flex-col items-start justify-center gap-y-4 md:w-auto">
                        <h1 className="text-background dark:text-foreground text-start text-lg font-semibold uppercase md:text-3xl lg:text-4xl">
                            Visi
                        </h1>
                        <p className="text-background/80 dark:text-muted-foreground max-w-full text-start text-base md:max-w-lg md:text-lg">
                              Bani Mufadhillah adalah sebuah wadah yang memperkuat tali persaudaraan di antara komunitas Alawiyin di Indonesia, dengan
                            mengedepankan nilai-nilai ukhuwah Islamiyah yang saling mendukung dan mempererat hubungan antar sesama. Organisasi ini
                            juga berkomitmen untuk menjaga dan melestarikan silsilah keturunan Alawiyin, sesuai dengan ajaran Islam yang berlandaskan
                            Al-Qur'an dan Sunnah Rasul SAW.
                        </p>
                    </div>
                </MaxWidthWrapper>
            </Section>
            <Section id={'mission'} className="relative mx-auto flex flex-col bg-slate-50 py-8 md:py-16 dark:bg-transparent">
                <img src="/images/global/pattern-1.png" className="absolute inset-0 z-0 h-full w-full object-cover" />

                <MaxWidthWrapper className="relative flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
                    <div className="order-2 flex w-full flex-col items-start justify-center gap-y-4 md:order-1 md:w-auto">
                        <h1 className="text-primary dark:text-foreground text-start text-lg font-semibold uppercase md:text-3xl lg:text-4xl">Misi</h1>
                        <p className="text-primary/80 dark:text-muted-foreground max-w-full text-start text-base md:max-w-lg md:text-lg">
                            Menjadi sebuah wadah yang menggerakkan dan menyatukan komunitas Alawiyin di Indonesia, dengan tujuan untuk meningkatkan
                            kesejahteraan masyarakat secara menyeluruh, baik lahir maupun batin, sesuai dengan ajaran Islam yang bersumber dari
                            Al-Qur'an dan Sunnah Rasul SAW. Organisasi ini berlandaskan pada Islam Ahlus Sunnah wal Jamaah dengan aqidah Asy-‘ariyyah.
                        </p>
                    </div>
                    <img
                        src="/images/home/mission.jpg"
                        alt="misi"
                        className="order-1 h-64 w-full overflow-hidden rounded-2xl object-cover md:order-2 md:h-80 md:w-[32rem]"
                    />
                </MaxWidthWrapper>
            </Section>
        </>
    );
};

export { VisionMissionSection };
