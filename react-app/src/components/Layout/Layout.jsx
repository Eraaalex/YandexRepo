import { Header } from "../Header-Footer/Header";
import styles from "./styles.module.css";
import {Link} from "react-router-dom";
export const Layout =(props) =>{
    return <div className='layout' >
        <header className={styles.header}>
            <Header>
        {/*<Link to={}></Link>*/}


        </Header></header>
        <div className={styles.main}>
            {props.children}
        </div>
        <footer></footer>
    </div>
}