import {Layout} from "./components/Layout/Layout";
import {genres} from "./constants/mock";
import { chosenBooks } from "./constants/mock";
import { BooksPage } from "./pages/BooksPage";
import { BasketPage } from "./pages/BasketPage";
import { OneBookPage } from "./pages/OneBookPage"
import {Provider} from "react-redux";
//import {store} from "./store";
export function App(){
    return <Layout>
        <BooksPage genres ={genres}></BooksPage>
        {/* <OneBookPage book={genres[0].books[0]} genreName = {genres[0].name}></OneBookPage>*/}
        {/*<BasketPage chosenBooks={chosenBooks} ></BasketPage>*/}
    </Layout>

}