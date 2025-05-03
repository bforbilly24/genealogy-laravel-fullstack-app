import { CardType } from '@/types/api';

class GalleryManager {
    private static instance: GalleryManager;
    private cards: CardType[] = [];

    private constructor() {}

    public static getInstance(): GalleryManager {
        if (!GalleryManager.instance) {
            GalleryManager.instance = new GalleryManager();
        }
        return GalleryManager.instance;
    }

    public setCards(cards: CardType[]) {
        this.cards = cards;
    }

    public getCards(): CardType[] {
        return this.cards;
    }

    public getCardById(id: number): CardType | undefined {
        return this.cards.find((card) => card.id === id);
    }
}

export const galleryManager = GalleryManager.getInstance();
