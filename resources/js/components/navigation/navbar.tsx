'use client';

import AnimationContainer from '@/components/global/animation-container';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { Button } from '@/components/ui/shadcn/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/shadcn/navigation-menu';
import { Separator } from '@/components/ui/shadcn/separator';
import { NAV_LINKS } from '@/constants/nav-links';
import ToggleTheme from '@/hooks/toggle-theme';
import { cn } from '@/lib/cn';
import { Link, usePage } from '@inertiajs/react';
import { AlignRight, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { url } = usePage();

    const handleScroll = () => {
        if (window.scrollY > 8) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isHomePage = url === '/';

    return (
        <>
            <header
                id="navbar"
                className={cn(
                    'fixed inset-x-0 top-0 z-[99] h-14 w-full border-b border-transparent bg-transparent select-none lg:h-24',
                    scroll && 'border-white/80 bg-white/80 backdrop-blur-md dark:border-green-950/80 dark:bg-green-950/80',
                )}
            >
                <AnimationContainer reverse delay={0.1} className="size-full">
                    <MaxWidthWrapper className="flex items-center justify-between">
                        <Link href="/" className="items-center lg:items-start">
                            <div className="aspect-[115/39] h-[2.438rem] w-1/3 lg:aspect-[271/78] lg:h-[4rem] lg:w-[16rem]">
                                <img loading="lazy" src="/brand/logo.png" alt="logo" className="h-full w-full object-contain" />
                            </div>
                        </Link>

                        <div className="hidden w-full flex-row items-center justify-end gap-x-4 md:flex lg:flex">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {NAV_LINKS.map((link) => (
                                        <NavigationMenuItem key={link.title}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={link.href}
                                                    className={cn(
                                                        navigationMenuTriggerStyle(),
                                                        !scroll && isHomePage
                                                            ? 'hover:bg-accent/30 bg-transparent text-white'
                                                            : 'bg-transparent text-black dark:text-white',
                                                    )}
                                                >
                                                    {link.title}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>

                            <div className="hidden flex-row items-center justify-between gap-x-4 md:flex lg:flex">
                                <Separator orientation="vertical" className="h-6" />
                                <div className="flex items-center justify-center gap-x-4">
                                    <div className="flex items-center gap-x-4">
                                        <Link
                                            href="/kontak"
                                            target="_blank"
                                            className={cn(
                                                'ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
                                                !scroll && isHomePage
                                                    ? 'hover:bg-accent/30 border-foreground/20 hover:border-foreground/40 border border-none bg-transparent text-white'
                                                    : !scroll && !isHomePage
                                                      ? 'hover:bg-accent/30 border-foreground/20 hover:border-foreground/40 bg-primary border border-none text-white'
                                                      : 'hover:bg-accent/30 text-black dark:text-white',
                                                scroll && 'text-white',
                                            )}
                                        >
                                            Kontak <Phone className={cn('ml-1.5 size-3.5', !scroll ? 'fill-transparent' : 'fill-white')} />
                                        </Link>
                                    </div>
                                    <ToggleTheme isScrolled={scroll} />
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(true)}
                                className={cn(
                                    !scroll && isHomePage ? 'hover:bg-accent/30 text-white' : 'hover:bg-accent/30 text-black dark:text-white',
                                )}
                            >
                                <AlignRight className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </div>
                    </MaxWidthWrapper>
                </AnimationContainer>
            </header>

            <MobileNav isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} scroll={scroll} />
        </>
    );
};

export { Navbar };
