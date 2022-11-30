import { Layout } from "./components/Layout/Layout";
// import { genres } from "./constants/mock";
// import { chosenBooks } from "./constants/mock";
import { BooksPage } from "./pages/BooksPage";
import { BasketPage } from "./pages/BasketPage";
import { OneBookPage } from "./pages/OneBookPage";
import { Provider } from "react-redux";
import { store } from "./store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {BookCard} from "./components/Book/BookCard";
export function App() {
    return (
        <Provider store = {store}>
            <BrowserRouter>
            <Layout>

                    <Routes>
                        <Route index element ={<HomePage/>}/>
                        <Route path="/genres" element ={<BooksPage/>}/>
                        <Route path="/book" element={<OneBookPage/>}/>

                    </Routes>
            </Layout>
        </BrowserRouter>
        </Provider>
    );
}
