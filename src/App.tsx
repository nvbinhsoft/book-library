import './App.css'
import {BooksProvider} from "./BooksContext.tsx";
import Books from "./components/Books.tsx";

function App() {

  return (
      <BooksProvider>
          <div>
              <Books>

              </Books>
          </div>
      </BooksProvider>

  )
}

export default App
