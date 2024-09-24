import {useContext, useEffect} from "react";
import {Book, BooksContext} from "../BooksContext.tsx";
import {useLocation} from "react-router-dom";

export default function Books() {

    const { books } = useContext(BooksContext) || { books: [] };
    const query = new URLSearchParams(useLocation().search);
    const search = query.get("search") || "";
    const filteredBooks = books.filter((book: Book) => book.title.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        console.log(query.get("search"));
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {filteredBooks.map((book: Book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}