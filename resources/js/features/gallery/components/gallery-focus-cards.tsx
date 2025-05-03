'use client';

import { Loader } from '@/components/loader/loader';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/shadcn/dialog';
import { CardFactory } from '@/features/gallery/patterns/card-factory';
import { CardType } from '@/types/api';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const CARDS_PER_LOAD = {
    MOBILE: 4,
    DESKTOP: 12,
} as const;

const MOBILE_BREAKPOINT = 640;
const LOAD_DELAY_MS = 1000;
const OBSERVER_THRESHOLD = 0.1;

function GalleryFocusCards({ cards }: { cards: CardType[] }) {
    const [hovered, setHovered] = useState<number | null>(null);
    const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
    const [visibleCards, setVisibleCards] = useState<CardType[]>([]);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    const getCardsPerLoad = useCallback(() => {
        return window.innerWidth < MOBILE_BREAKPOINT ? CARDS_PER_LOAD.MOBILE : CARDS_PER_LOAD.DESKTOP;
    }, []);

    const [cardsPerLoad, setCardsPerLoad] = useState(getCardsPerLoad);

    useEffect(() => {
        const handleResize = () => {
            setCardsPerLoad(getCardsPerLoad());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getCardsPerLoad]);

    useEffect(() => {
        setVisibleCards(cards.slice(0, cardsPerLoad));
    }, [cards, cardsPerLoad]);

    const loadMoreCards = useCallback(() => {
        if (visibleCards.length >= cards.length || loading) return;
        setLoading(true);
        setTimeout(() => {
            const nextCards = cards.slice(visibleCards.length, visibleCards.length + cardsPerLoad);
            setVisibleCards((prev) => [...prev, ...nextCards]);
            setLoading(false);
        }, LOAD_DELAY_MS);
    }, [cards, visibleCards.length, cardsPerLoad, loading]);

    useEffect(() => {
        const currentLoadMoreRef = loadMoreRef.current;
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    loadMoreCards();
                }
            },
            { threshold: OBSERVER_THRESHOLD },
        );
        if (currentLoadMoreRef) {
            observerRef.current.observe(currentLoadMoreRef);
        }
        return () => {
            if (observerRef.current && currentLoadMoreRef) {
                observerRef.current.unobserve(currentLoadMoreRef);
            }
        };
    }, [loadMoreCards, loading]);

    const handleCardClick = useCallback((card: CardType) => {
        setSelectedCard(card);
    }, []);

    return (
        <>
            <div className="mx-auto grid w-full max-w-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {visibleCards.map((card, index) => {
                    const galleryCard = CardFactory.createCard(card);
                    return (
                        <React.Fragment key={card.id}>
                            {galleryCard.render({
                                card,
                                index,
                                hovered,
                                setHovered,
                                onClick: handleCardClick,
                            })}
                        </React.Fragment>
                    );
                })}
            </div>

            {visibleCards.length < cards.length && (
                <div ref={loadMoreRef} className="flex justify-center py-8">
                    {loading && <Loader />}
                </div>
            )}

            <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
                <DialogContent className="max-h-[90vh] w-[90vw] overflow-y-auto sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-foreground text-base md:text-base lg:text-xl">{selectedCard?.title}</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-y-4">
                        <img
                            src={selectedCard?.src}
                            alt={selectedCard?.title}
                            className="h-auto max-h-[50vh] w-full rounded-md object-cover"
                            loading="lazy"
                        />
                        <DialogDescription className="text-foreground text-sm font-medium text-pretty">{selectedCard?.description}</DialogDescription>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export { GalleryFocusCards };
