import { Layout } from './components/Layout/Layout';
import { genres } from './constants/mock';
import { BooksPage } from './pages/BooksPage';
import { OneBookPage } from './pages/OneBookPage';
export function App() {
  return (
    <Layout>
      {/* <BooksPage genres={genres}></BooksPage> */}
      <OneBookPage
        book={genres[0].books[0]}
        genreName={genres[0].name}
      ></OneBookPage>
    </Layout>
  );
}
