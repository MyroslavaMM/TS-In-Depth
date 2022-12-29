import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import {
    calcTotalPages,
    getAllBooks,
    getBookAuthorByIndes,
    getBookTitlesByCategory,
    logBookTitle,
    logFirstAvailable,
    printRefBook,
    purge,
} from './functions';
import { Book, Librarian, Logger, Magazine } from './interfaces';
import { Library } from './classes/library';
// import type { Library } from './classes/library';
// import { Library } from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// =========================================

// ===============================
// Tast 02.01

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitle(getBookTitlesByCategory(Category.JavaScript));
// getBookAuthorByIndes(0);
// calcTotalPages();

// Task 03.01

// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string; // функціональний тип
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`; // функція
// idGenerator = createCustomerID;

// console.log(idGenerator('Boris', 20));

// Task 03.02

// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(Category.CSS));

// logFirstAvailable();

// console.log(getBookByID(1));
// console.log(checkoutBooks('NoName Customer', 1, 3, 4));
// console.log(checkoutBooks('NoName Customer', ...[1, 3, 4])); // якщо передається не списком, а масивом можна використати спред оператор, який розгортає масив і отримується список

// Task 03.03
// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(false));
// console.log(getTitles(2, false));
// console.log(getTitles('Lea Verou'));

// Task 03.04
// console.log(bookTitleTransform('Learn TypeScript'));
// console.log(bookTitleTransform(123));
// console.log(bookTitleTransform({}));

// Task 04.01

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     markDamaged(reason: string) {
//         console.log(`Damaged: ${reason}`);
//     }
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBookPublished: 2
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: null,
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     }
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[10]?.name);

// Task 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01
// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02, 05.03
// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2022, 2);
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian /* & A */ = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// let a: number | string;
// (<number>a).toUpperCase();

// if (typeof a === 'string') {
//     a.toString();
// } else {
//     a.toFixed();
// }

// Task 05.05

// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'ann@example.com',
//     id: 1,
//     title: 'Unknown'
// };

// const options = {};
// const options2 = setDefaultConfig(options);
// console.log(options, options2);
// console.log(Object.is(options, options2));

// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// const favoriteLibrarian: Librarian /* & A */ = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05
// const flag = true;
// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const o = await import('./classes');
//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// Task 06.06
// let library: Library = new Library();
// let library: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna',
// };

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// const result = purge(inventory);
// console.log(result);

// const result1 = purge([1, 2, 3]);
// console.log(result1);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

const magazineShefl = new Shelf<Magazine>();
magazines.forEach(mag => magazineShefl.add(mag));
console.log(magazineShefl.getFirst().title);
