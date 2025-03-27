import { createInertiaApp } from '@inertiajs/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ScrollProgressProvider } from '@/components/providers/scroll-progress-provider';

const queryClient = new QueryClient();

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
        return pages[`./pages/${name}.tsx`];
    },

    setup({ el, App, props }) {
        createRoot(el).render(
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                <ScrollProgressProvider className="top-0 z-[100]" />
                <App {...props} />
                {import.meta.env.MODE === 'development' && (
                    <>
                        <ReactQueryDevtools buttonPosition="bottom-left" />
                    </>
                )}
                </ThemeProvider>
            </QueryClientProvider>,
        );
    },
});
