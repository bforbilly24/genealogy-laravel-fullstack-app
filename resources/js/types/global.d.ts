import type { route as routeFn } from 'ziggy-js';

declare global {
    const route: typeof routeFn;
}

interface LoaderProps {
    className?: string;
    barClassName?: string;
}

export { LoaderProps };