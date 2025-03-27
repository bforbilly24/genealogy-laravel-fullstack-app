// card-factory.tsx
import { CardProps, GalleryCard } from '@/features/gallery/data/gallery'; // Impor CardProps dari gallery.d.ts
import { cn } from '@/lib/cn';
import { CardType } from '@/types/api';
import { ScanSearchIcon } from 'lucide-react';
import { JSX } from 'react';

// Kelas dasar untuk kartu
class BaseCard implements GalleryCard {
    constructor(protected card: CardType) {}

    render(props: CardProps): JSX.Element {
        const { index, hovered, setHovered, onClick } = props;
        return (
            <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onClick(this.card)}
                className={cn(
                    'relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out dark:bg-neutral-900',
                    hovered !== null && hovered !== index && 'scale-[0.98] blur-sm',
                )}
            >
                <img src={this.card.src} alt={this.card.title} className="h-full w-full rounded-lg object-cover" loading="lazy" />
                <div
                    className={cn(
                        'absolute inset-0 flex items-end bg-black/50 p-4 transition-opacity duration-300',
                        hovered === index ? 'opacity-100' : 'opacity-0',
                    )}
                >
                    <h1 className="text-sm lg:line-clamp-2 font-medium text-white sm:text-lg md:text-xl">{this.card.title}</h1>
                </div>
                {hovered === index && (
                    <ScanSearchIcon className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 text-white sm:size-10 md:size-12" />
                )}
            </div>
        );
    }

    getData(): CardType {
        return this.card;
    }
}

// Kelas untuk kartu tipe Photo
class PhotoCard extends BaseCard {
    render(props: CardProps): JSX.Element {
        const { index, hovered, setHovered, onClick } = props;
        return (
            <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onClick(this.card)}
                className={cn(
                    'relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out dark:bg-neutral-900',
                    hovered !== null && hovered !== index && 'scale-[0.98] blur-sm',
                )}
            >
                <img src={this.card.src} alt={this.card.title} className="h-full w-full rounded-lg object-cover" loading="lazy" />
                <div
                    className={cn(
                        'absolute inset-0 flex items-end justify-between bg-black/50 p-4 transition-opacity duration-300',
                        hovered === index ? 'opacity-100' : 'opacity-0',
                    )}
                >
                    <h1 className="line-clamp-1 bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-sm font-medium text-transparent sm:text-lg md:text-xl">
                        {this.card.title}
                    </h1>
                    {hovered === index && (
                        <ScanSearchIcon className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 text-white sm:size-10 md:size-12" />
                    )}
                </div>
            </div>
        );
    }
}

// Kelas untuk kartu tipe Video
class VideoCard extends BaseCard {
    render(props: CardProps): JSX.Element {
        const { index, hovered, setHovered, onClick } = props;
        return (
            <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onClick(this.card)}
                className={cn(
                    'relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out dark:bg-neutral-900',
                    hovered !== null && hovered !== index && 'scale-[0.98] blur-sm',
                )}
            >
                <video src={this.card.src} controls className="h-full w-full rounded-lg object-cover" />
                <div
                    className={cn(
                        'absolute inset-0 flex items-end justify-between bg-black/50 p-4 transition-opacity duration-300',
                        hovered === index ? 'opacity-100' : 'opacity-0',
                    )}
                >
                    <h1 className="line-clamp-1 bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-sm font-medium text-transparent sm:text-lg md:text-xl">
                        {this.card.title}
                    </h1>
                    {hovered === index && (
                        <ScanSearchIcon className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 text-white sm:size-10 md:size-12" />
                    )}
                </div>
            </div>
        );
    }
}

// Factory untuk membuat kartu
class CardFactory {
    static createCard(card: CardType): GalleryCard {
        switch (card.type) {
            case 'photo':
                return new PhotoCard(card);
            case 'video':
                return new VideoCard(card);
            default:
                return new BaseCard(card);
        }
    }
}

export { CardFactory };
