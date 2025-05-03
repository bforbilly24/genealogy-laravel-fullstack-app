import { CardType } from '@/types/api';

interface CardProps {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onClick: (card: CardType) => void;
}

interface GalleryCard {
    render(props: CardProps): JSX.Element;
    getData(): CardType;
}

export { CardProps, GalleryCard };
