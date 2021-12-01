export interface Book {
    author: string;
    country: string;
    language: string;
    pages: number;
    title: string;
    year: number;
    price: number;
    isbn: number;
}

export function isBook(item: any): item is Book {
    return 'isbn' in item;
}

export type Item = Omit<Book, 'pages'> & {
    quantity: number;
};
