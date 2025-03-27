"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/cn";
import { ScanSearchIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/shadcn/dialog";
import { Loader } from "@/components/loader/loader";
import { CardType } from "@/types/api";

const CARDS_PER_LOAD = {
  MOBILE: 4,
  DESKTOP: 12,
} as const;

const MOBILE_BREAKPOINT = 640;
const LOAD_DELAY_MS = 1000;
const OBSERVER_THRESHOLD = 0.1;

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onClick,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onClick: (card: CardType) => void;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onClick(card)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden transition-all duration-300 ease-out cursor-pointer aspect-square",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="h-full w-full rounded-lg object-cover"
        loading="lazy"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end justify-between p-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <h1 className="text-sm sm:text-lg md:text-xl font-medium line-clamp-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </h1>
        {hovered === index && (
          <ScanSearchIcon
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 sm:size-10 md:size-12 text-white"
          />
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";


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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      { threshold: OBSERVER_THRESHOLD }
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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full mx-auto w-full">
        {visibleCards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {visibleCards.length < cards.length && (
        <div ref={loadMoreRef} className="flex justify-center py-8">
          {loading && <Loader />}
        </div>
      )}

      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="sm:max-w-md w-[90vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-foreground text-base md:text-base lg:text-xl">{selectedCard?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-y-4">
            <img
              src={selectedCard?.src}
              alt={selectedCard?.title}
              className="w-full h-auto max-h-[50vh] object-cover rounded-md"
              loading="lazy"
            />
            <DialogDescription className="text-sm text-pretty font-medium text-foreground">
              {selectedCard?.description}
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export { GalleryFocusCards };