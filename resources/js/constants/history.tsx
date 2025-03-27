import { ContentDivProps, InnerDivProps, TimelineItem } from '@/features/history/data/history';
import { ReactElement } from 'react';

const HISTORY: TimelineItem[] = [
    {
        title: '15 Februari 1755',
        content: (
            <div>
                {
                    (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <img
                                src="/images/home/about-us-4.png"
                                alt="Perjanjian Jatisari 1"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <img
                                src="/images/home/about-us-4.png"
                                alt="Perjanjian Jatisari 2"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <p className="mb-8 text-xs font-normal text-neutral-800 md:col-span-2 lg:text-sm dark:text-neutral-200">
                                Perjanjian Giyanti ini kemudian diikuti pula dengan pertemuan antara Sultan Yogyakarta dengan Sunan Surakarta di
                                Lebak, Jatisari pada tanggal 15 Februari 1755. Dalam pertemuan ini dibahas mengenai peletakan dasar kebudayaan bagi
                                masing-masing kerajaan.
                            </p>
                        </div>
                    ) as ReactElement<InnerDivProps>
                }
            </div>
        ) as ReactElement<ContentDivProps>,
    },
    {
        title: '1 Maret 1800',
        content: (
            <div>
                {
                    (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <img
                                src="/images/home/about-us-4.png"
                                alt="Pembangunan Kraton 1"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <img
                                src="/images/home/about-us-4.png"
                                alt="Pembangunan Kraton 2"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <p className="mb-8 text-xs font-normal text-neutral-800 md:col-span-2 lg:text-sm dark:text-neutral-200">
                                Pembangunan Kraton Yogyakarta dimulai sebagai simbol kekuatan dan identitas budaya baru setelah perjanjian sebelumnya.
                            </p>
                        </div>
                    ) as ReactElement<InnerDivProps>
                }
            </div>
        ) as ReactElement<ContentDivProps>,
    },
    {
        title: '20 April 1945',
        content: (
            <div>
                {
                    (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <img
                                src="/images/home/about-us-4.png"
                                alt="Era Modern 1"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <img
                                src="/images/home/about-us-4.png"
                                alt="Era Modern 2"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <p className="mb-8 text-xs font-normal text-neutral-800 md:col-span-2 lg:text-sm dark:text-neutral-200">
                                Kraton Yogyakarta memasuki era modern dengan tetap mempertahankan tradisi dan budaya Jawa di tengah perkembangan
                                zaman.
                            </p>
                        </div>
                    ) as ReactElement<InnerDivProps>
                }
            </div>
        ) as ReactElement<ContentDivProps>,
    },
];


export { HISTORY };