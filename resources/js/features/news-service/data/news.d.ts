// resources/js/features/news-service/data/news.d.ts
interface User {
    name: string;
    photo?: string;
}

interface TypeOfNews {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    created_at: string;
    user?: User;
}

export { TypeOfNews, User };
