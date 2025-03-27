'use client';
import { cn } from '@/lib/cn';
import { LoaderProps } from '@/types/global';
import { motion, Variants } from 'framer-motion';

const barVariants: Variants = {
    initial: {
        scaleY: 0.5,
        opacity: 0,
    },
    animate: {
        scaleY: 1,
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: 'mirror' as const,
            duration: 1,
            ease: 'circIn',
        },
    },
};

const Loader = ({ className, barClassName }: LoaderProps) => {
    return (
        <motion.div
            transition={{
                staggerChildren: 0.25,
            }}
            initial="initial"
            animate="animate"
            className={cn('flex gap-1', className)}
        >
            <motion.div variants={barVariants} className={cn('bg-primary h-8 w-1.5 md:h-12 md:w-2 lg:h-12 lg:w-2', barClassName)} />
            <motion.div variants={barVariants} className={cn('bg-primary h-8 w-1.5 md:h-12 md:w-2 lg:h-12 lg:w-2', barClassName)} />
            <motion.div variants={barVariants} className={cn('bg-primary h-8 w-1.5 md:h-12 md:w-2 lg:h-12 lg:w-2', barClassName)} />
            <motion.div variants={barVariants} className={cn('bg-primary h-8 w-1.5 md:h-12 md:w-2 lg:h-12 lg:w-2', barClassName)} />
            <motion.div variants={barVariants} className={cn('bg-primary h-8 w-1.5 md:h-12 md:w-2 lg:h-12 lg:w-2', barClassName)} />
        </motion.div>
    );
};

export { Loader };
