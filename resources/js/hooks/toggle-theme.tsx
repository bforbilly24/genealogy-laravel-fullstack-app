'use client';

import { cn } from '@/lib/cn';
import { LaptopMinimal, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Button } from '@/components/ui/shadcn/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/shadcn/dropdown-menu';
import { usePage } from '@inertiajs/react';

interface ToggleThemeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    isScrolled?: boolean;
}

const ToggleTheme = React.forwardRef<HTMLButtonElement, ToggleThemeProps>(({ className, isScrolled = false, ...props }, ref) => {
    const { theme, setTheme } = useTheme();
    const { url } = usePage();
    const isHomePage = url === '/';

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <>
            <Button
                ref={ref}
                variant="outline"
                size="icon"
                onClick={handleToggle}
                aria-label="Toggle theme"
                {...props}
                className={cn(
                    'flex md:hidden lg:hidden',
                    !isScrolled && isHomePage
                        ? 'hover:bg-accent/30 hover:border-foreground/40 border-transparent bg-transparent text-white'
                        : 'text-black dark:text-white',
                    isScrolled && 'text-black dark:text-white',
                    className,
                )}
            >
                <Sun className={cn('size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90', 
                    !isScrolled && isHomePage ? 'text-white' : 'text-black dark:text-white')} />
                <Moon className={cn('absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0', 
                    !isScrolled && isHomePage ? 'text-white' : 'text-black dark:text-white')} />
            </Button>

            <div className="hidden md:flex lg:flex">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            ref={ref}
                            variant="outline"
                            size="icon"
                            aria-label="Toggle theme"
                            className={cn(
                                !isScrolled && isHomePage
                                    ? 'hover:bg-accent/30 hover:border-foreground/40 border-transparent bg-transparent text-white'
                                    : 'text-black dark:text-white bg-transparent border-primary hover:bg-primary/30',
                                isScrolled && 'text-black dark:text-white bg-transparent border-primary hover:bg-primary/30',
                                className,
                            )}
                            {...props}
                        >
                            <Sun className={cn('h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90', 
                                !isScrolled && isHomePage ? 'text-white' : 'text-black dark:text-white')} />
                            <Moon className={cn('absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0', 
                                !isScrolled && isHomePage ? 'text-white' : 'text-black dark:text-white')} />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="z-[100] mt-4">
                        <DropdownMenuItem onClick={() => setTheme('light')}>
                            <Sun className="mr-2 h-4 w-4" /> Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('dark')}>
                            <Moon className="mr-2 h-4 w-4" /> Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('system')}>
                            <LaptopMinimal className="mr-2 h-4 w-4" /> System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
});

ToggleTheme.displayName = 'ToggleTheme';

export default ToggleTheme;