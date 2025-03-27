import { cn } from '@/lib/cn';
import { User } from 'lucide-react';

const QuoteCard = ({ name, username, body }: { name: string; username: string; body: string }) => {
    return (
        <figure
            className={cn(
                'bg-background relative flex h-40 w-[18rem] cursor-pointer flex-col gap-y-2 overflow-hidden rounded-lg border-2 p-4',
                'border-gray-950/20 hover:bg-gray-50/50',
                'dark:border-gray-400/50 dark:hover:bg-gray-900/80',
            )}
        >
            <div className="flex flex-row items-center gap-x-4">
                <div className="border-foreground/10 rounded-full border-2 bg-neutral-200/80 p-1.5 backdrop-blur-xl dark:bg-neutral-800/80">
                    <User className="text-foreground size-5" />
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-foreground text-sm font-medium">{name}</figcaption>
                    <p className="text-muted-foreground text-xs font-medium">{username}</p>
                </div>
            </div>
            <blockquote className="text-foreground text-sm">{body}</blockquote>
        </figure>
    );
};

export default QuoteCard;
