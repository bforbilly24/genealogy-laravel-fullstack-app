'use client';
import { apiUrl } from '@/api/api-url';
import { CardType } from '@/types/api';
import axios from 'axios';

const GetGallery = async (): Promise<{ cards: CardType[]; error: string | null }> => {
    try {
        const response = await axios.get(`${apiUrl}/gallery`);
        return { cards: response.data.cards, error: null };
    } catch (err) {
        console.error('Error fetching gallery:', err);
        return { cards: [], error: 'Error loading gallery. Please try again later.' };
    }
};

export { GetGallery };  
