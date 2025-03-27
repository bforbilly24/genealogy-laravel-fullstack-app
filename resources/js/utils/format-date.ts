function formatDate(dateString: string) { 
    try {
        const date = new Date(dateString);
        const now = new Date();
        const diff: number = now.getTime() - date.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        let formattedDate;
        if (days > 7) {
            const day = date.getDate();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            formattedDate = `${day} ${month} ${year}`;
        } else if (days > 0) {
            formattedDate = `${days} hari yang lalu`;
        } else if (hours > 0) {
            formattedDate = `${hours} jam yang lalu`;
        } else if (minutes > 0) {
            formattedDate = `${minutes} menit yang lalu`;
        } else {
            formattedDate = `${seconds} detik yang lalu`;
        }
        const options: { year: 'numeric'; month: 'long'; day: 'numeric' } = { year: 'numeric', month: 'long', day: 'numeric' };
        const longFormattedDate = date.toLocaleDateString('id-ID', options);
        const monthName = date.toLocaleDateString('id-ID', { month: 'long' }).toLowerCase();
        const yearFull = date.getFullYear();

        const monthOrder = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];

        return {
            day: date.toLocaleDateString('id-ID', { weekday: 'long' }),
            formattedDate, 
            longFormattedDate, 
            monthName,
            monthOrder,
            year: yearFull,
        };
    } catch (error) {
        console.error('Error formatting date:', error);
        return {
            day: '',
            formattedDate: '',
            longFormattedDate: '',
            monthName: '',
            monthOrder: [],
            year: '',
        };
    }
}


export { formatDate };
