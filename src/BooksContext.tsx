import { createContext, useEffect, useState, ReactNode } from "react";

export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
}
export interface BooksContextType {
    books: Book[];
}

export const BooksContext = createContext<BooksContextType>({books: []});

export const BooksProvider = ({children}: {children: ReactNode}) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/books.json")
            .then(r => r.json())
            .then(data => setBooks(data))
            .catch(console.error);
    }, []);

    return (
        <BooksContext.Provider value={{books}}>
            {children}
        </BooksContext.Provider>
    );
}