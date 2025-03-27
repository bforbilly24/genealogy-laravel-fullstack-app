import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';
import { Button } from '@/components/ui/shadcn/button';
import { ExternalLink } from 'lucide-react';

const HistorySection = () => {
    return (
        <Section id={'history'} className="to-primary relative mx-auto flex flex-col bg-gradient-to-t from-green-950 py-8 md:py-12 lg:py-16">
            <img src="/images/global/pattern-2.png" className="absolute inset-0 z-0 h-full w-full object-cover" />

            <MaxWidthWrapper className="max-w-container relative">
                <div className="flex flex-col items-center justify-center gap-y-6 md:gap-y-8 lg:gap-y-10">
                    <div className="flex flex-col items-center justify-center gap-y-3 md:gap-y-4 lg:gap-y-5">
                        <h1 className="text-center text-xl font-light text-white uppercase md:text-2xl lg:text-4xl">Sejarah</h1>
                        <p className="max-w-lg text-center text-sm text-slate-200 md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
                            Keluarga <b>Bani Mufadhillah</b> yang berawal dari keturunan &#34;Mbah Munajat dan Mbah Fadhillah&#34;, memiliki sejarah
                            panjang dalam menjaga dan melestarikan nilai-nilai luhur yang diwariskan oleh leluhur mereka. Sejak awal pembentukannya,
                            keluarga besar ini telah berkomitmen untuk mempererat hubungan antar anggota dan meneruskan ajaran-ajaran yang telah
                            ditanamkan oleh Mbah Munajat dan Mbah Fadhillah. Surat permohonan pengesahan yang dikirim pada tanggal 8 Maret 1928
                            menjadi tonggak penting dalam pengesahan keluarga ini, yang ditandatangani oleh para tokoh penting dalam keluarga,
                            termasuk Sayid Muhammad bin Abdulrahman bin Syahab sebagai Ketua dan Sayid Achmad bin Abdullah Assagaf sebagai Sekretaris.
                        </p>
                        <Button
                            size={'lg'}
                            className="bg-primary flex items-center justify-center gap-x-1 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg"
                            onClick={() => (window.location.href = '/sejarah')}
                        >
                            Selengkapnya
                            <ExternalLink className="size-4 md:size-4 lg:size-5" />
                        </Button>
                    </div>
                </div>
            </MaxWidthWrapper>
        </Section>
    );
};

export { HistorySection };
