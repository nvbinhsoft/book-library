import './App.css'
import {BooksProvider} from "./BooksContext.tsx";
import Books from "./components/Books.tsx";
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import BookDetail from "./components/BookDetail.tsx";
import NotFound from "./components/NotFound.tsx";
import SecretBook from "./components/SecretBook.tsx";
import {PrivateRoute} from "./components/PrivateRoute.tsx";

function App() {
    return (
        <BooksProvider>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Books/>}></Route>
                    <Route path={"/book"} element={<Navigate to={"/"}/>}></Route>
                    <Route path={"/book/:bookId"} element={<BookDetail/>}></Route>
                    <Route path={"*"} element={<NotFound/>}></Route>
                    <Route path={"/secret"} element={<PrivateRoute component={<SecretBook/>} /> }></Route>
                </Routes>
            </Router>
        </BooksProvider>
    )
}

export default App