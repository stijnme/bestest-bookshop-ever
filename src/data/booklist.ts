import { Book } from '../interfaces/interfaces';

const mockBooks: Book[] = [
    {
        author: 'Bastiaan van Meggelen',
        country: 'Russia',
        language: 'Mandarin',
        pages: 1296,
        title: 'The life of Bastiaan',
        year: 1867,
        price: '€ 0.99',
    },
    {
        author: 'Bastiaan van Meggelen',
        country: 'Russia',
        language: 'Mandarin',
        pages: 1337,
        title: 'The life of Bastiaan, part2',
        year: 1945,
        price: '€ 0.99',
    },
    {
        author: 'Timon van Soom',
        country: 'Netherlands',
        language: 'French',
        pages: 92,
        title: 'The man of few words',
        year: 1999,
        price: '€ 1.99',
    },
    {
        author: 'Timon van Soom',
        country: 'Netherlands',
        language: 'French',
        pages: 92,
        title: 'The man of a bit more words',
        year: 2001,
        price: '€ 1.99',
    },
    {
        author: 'Mouade Boussaid',
        country: 'New Zealand',
        language: 'Classical Latin',
        pages: 235634,
        title: 'The man of many words',
        year: 0,
        price: '€ 3.99',
    },
    {
        author: 'Mouade Boussaid',
        country: 'New Zealand',
        language: 'Classical Latin',
        pages: 23523636,
        title: 'The man of too many words',
        year: 0,
        price: '€ 3.99',
    },
];
export default mockBooks;