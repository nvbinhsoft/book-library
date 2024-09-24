import {useContext} from "react";
import {Book, BooksContext} from "../BooksContext.tsx";

export default function Books() {

    const { books } = useContext(BooksContext) || { books: [] };
    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book: Book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}