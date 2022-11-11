import { Layout } from "./components/Layout/Layout";
import { genres } from "./constants/mock";
import { chosenBooks } from "./constants/mock";
import { BooksPage } from "./pages/BooksPage";
import { BasketPage } from "./pages/BasketPage";
import { OneBookPage } from "./pages/OneBookPage";
import { Provider } from "react-redux";
import { store } from "./store";
export function App() {
  return (
    <Provider store = {store}>
      <Layout>
          <BooksPage></BooksPage>
      </Layout>
    </Provider>
  );
}
