import { Category } from './enums';

interface DamageLogger {
    (reason: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void; // проперті метод
    // markDamaged?(reason: string): void;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBookPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface A {
    [prop: string]: string | number;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error | null, titles: string [] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export { Author, LibMgrCallback, Callback, ShelfItem, Book, Magazine, Librarian, Person, TOptions, A, DamageLogger as Logger };
