import { Header } from "../Header-Footer/Header";
import styles from "./styles.module.css";
export const Layout =(props) =>{
    return <div >
        <header className={styles.header}><Header></Header></header>
        <div className={styles.body}>
            {props.children}
        </div>
        <footer></footer>
    
    </div>
}