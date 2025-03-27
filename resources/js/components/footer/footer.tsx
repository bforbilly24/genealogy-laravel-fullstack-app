'use client';

import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { FOOTER_LINKS } from '@/constants/footer-link';
import { FooterLinkBase, FooterLinkWithIcon } from '@/types';
import { Link } from '@inertiajs/react';

function hasIcon(link: FooterLinkBase): link is FooterLinkWithIcon {
    return 'icon' in link && 'alt' in link;
}

const Footer = () => {
    return (
        <footer id="footer" className="mx-auto flex items-center justify-center">
            <MaxWidthWrapper>
                <div className="border-border relative mx-auto flex w-full flex-col items-center justify-center border-t px-6 pt-16 pb-8 md:pb-0 lg:px-8 lg:pt-32">
                    <div className="bg-foreground absolute top-0 right-1/2 left-1/2 h-1.5 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                    <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                        <div className="flex flex-col items-start justify-start md:max-w-[300px]">
                            <Link href="/home" className="items-center lg:items-start">
                                <div className="aspect-[271/78] w-40 lg:w-52">
                                    <img loading="lazy" src="/brand/logo.png" alt="logo" className="h-full w-full object-contain" />
                                </div>
                            </Link>
                            <p className="text-muted-foreground mt-4 text-start text-sm">Keluarga MUFADHILLAH</p>
                            <p className="text-foreground mt-4 text-start text-sm font-light">
                                Jalan Embong Malang Nomor 1-5, Kelurahan Kedungdoro, Kec. Tegalsari, Kota Surabaya, Provinsi Jawa Timur,
                                +6281931633594, official@multimedika.id
                            </p>
                            <span className="mt-4 flex items-center text-sm text-neutral-600 dark:text-neutral-200">
                                Made by{' '}
                                <a href="https://multimedika.id/" className="ml-1 font-semibold">
                                   Keluarga BANI MUFADHILLAH
                                </a>
                            </span>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 xl:col-span-2 xl:mt-0">
                            {Object.entries(FOOTER_LINKS).map(([key, section]) => (
                                <div key={key} className="space-y-8 md:grid md:grid-cols-1 md:gap-8 md:space-y-0">
                                    <div>
                                        <h3 className="text-foreground text-base font-medium">{section.title}</h3>
                                        <ul className="text-muted-foreground mt-4 text-sm">
                                            {section.links.map((link, index) => (
                                                <li key={index} className="mt-2">
                                                    <a
                                                        href={link.href}
                                                        className={`hover:text-foreground transition-all duration-300 ${hasIcon(link) ? 'flex items-center gap-x-[0.625rem]' : ''}`}
                                                    >
                                                        {hasIcon(link) && (
                                                            <img loading="lazy" src={link.icon} alt={link.alt} width="20" height="20" />
                                                        )}
                                                        {link.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border-border/40 mt-8 w-full border-t pt-4 md:flex md:items-center md:justify-between md:pt-8">
                        <p className="text-muted-foreground mt-8 text-sm md:mt-0">
                            &copy; {new Date().getFullYear()} Keluarga MUFADHILLAH . All rights reserved.
                        </p>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export { Footer };
