import './App.css'
import {BooksProvider} from "./BooksContext.tsx";
import Books from "./components/Books.tsx";
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <BooksProvider>
            <Router>
                <Route path={"/"} element={<Books/>}></Route>
                <h1>App</h1>
                {/*<Route path={"/book"} element={<Navigate to={"/"}/>}></Route>*/}
            </Router>
        </BooksProvider>
    )
}

export default App