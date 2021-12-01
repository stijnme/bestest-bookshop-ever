export interface Book {
    author: string;
    country: string;
    language: string;
    pages: number;
    title: string;
    year: number;
    price: string;
    isbn: number;
}

export function isBook(item: any): item is Book {
    return 'isbn' in item;
}

export type Item = Book & {
    quantity: number;
};
