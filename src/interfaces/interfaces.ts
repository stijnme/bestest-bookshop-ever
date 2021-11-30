export interface Book {
    author: string;
    country: string;
    language: string;
    pages: number;
    title: string;
    year: number;
    price: string;
}

export type Item = Book & {
    quantity: number;
};
