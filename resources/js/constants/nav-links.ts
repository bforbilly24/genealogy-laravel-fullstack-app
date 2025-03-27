import { AlbumIcon, BookOpenTextIcon, GalleryThumbnailsIcon, HomeIcon, NetworkIcon } from 'lucide-react';

const NAV_LINKS = [
    {
        title: 'Beranda',
        href: '/',
        icon: HomeIcon,
    },
    {
        title: 'Sejarah',
        href: '/sejarah',
        icon: AlbumIcon,
    },
    {
        title: 'Berita',
        href: '/berita',
        icon: BookOpenTextIcon,
    },
    {
        title: 'Silsilah',
        href: '/silsilah',
        icon: NetworkIcon,
    },
    {
        title: 'Galeri',
        href: '/galeri',
        icon: GalleryThumbnailsIcon,
    },
];

export { NAV_LINKS };
