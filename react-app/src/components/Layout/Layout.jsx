import { Header } from "../Header-Footer/Header";
import styles from "./styles.module.css";
export const Layout =(props) =>{
    return <div className='layout' >
        <header className={styles.header}><Header></Header></header>
        <div className={styles.main}>
            {props.children}
        </div>
        <footer></footer>
    </div>
}