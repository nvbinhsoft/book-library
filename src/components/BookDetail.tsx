import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Book, BooksContext, BooksContextType } from "../BooksContext.tsx";

export default function BookDetail() {
    const { bookId } = useParams();
    const { books } = useContext(BooksContext) as BooksContextType;
    const book: Book | undefined = books.find((book: Book) => book.id === Number(bookId));

    useEffect(() => {
        console.log(bookId);
    }, [bookId]);

    return (
        <div>
            <h1>Book Detail</h1>
            {book ? (
                <div>
                    <h2>{book.title}</h2>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p>{book.description}</p>
                </div>
            ) : (
                <p>Book not found</p>
            )}
        </div>
    );
}