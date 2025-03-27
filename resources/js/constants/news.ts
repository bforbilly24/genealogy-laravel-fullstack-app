import { TypeOfNews } from '@/features/news-service/data/news';

const News: TypeOfNews[] = [
    {
        id: 1,
        name: 'Telah Lahir Vania Salma',
        description: 'Nama: Vania Salma\nTtl: Sabtu, 04 Mei 2025\nPutri Pertama',
        image: '/images/home/content-1.jpg',
        category: 'Peristiwa',
        created_at: '2025-03-12T14:00:00Z',
        user: { name: 'Selamet Givani Zawali & Rodlotul Silma', photo: '/brand/logo.png' },
    },

    {
        id: 2,
        name: 'Pernikahan Akbar dan Tsabitah',
        description: 'Akbar dan Tsabitah melangsungkan pernikahan pada tanggal 22 Desember 2024.',
        image: '/images/home/content-4.jpg',
        category: 'Sejarah',
        created_at: '2024-12-22T00:00:00Z',
        user: { name: 'Akbar dan Tsabitah', photo: '/brand/logo.png' },
    },
    {
        id: 3,
        name: 'Ibadah Umroh Keluarga Stafaatul Qodari',
        description: 'Keluarga Stafaatul Qodari melaksanakan ibadah Umroh dari 5 Februari hingga 5 Maret 2025.',
        image: '/images/home/content-2.jpg',
        category: 'Sejarah',
        created_at: '2025-02-05T00:00:00Z',
        user: { name: 'Stafaatul Qodari', photo: '/brand/logo.png' },
    },
    {
        id: 4,
        name: 'Perjalanan Studi ke Korea oleh Akbar Fahmi',
        description: 'Akbar Fahmi melakukan perjalanan studi ke Korea pada 2 April 2025.',
        image: '/images/home/content-3.jpg',
        category: 'Sejarah',
        created_at: '2025-02-05T00:00:00Z',
        user: { name: 'Akbar Fahmi', photo: '/brand/logo.png' },
    },
];

export { News };
