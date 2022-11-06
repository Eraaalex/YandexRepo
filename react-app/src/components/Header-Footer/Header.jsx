import styles from './styles.module.css';
import trolley from '../../icons/trolley.svg';
export const Header = () =>{
    return <>
    <div className ={styles.name}>Магазин</div>
    <img src={trolley} alt="" />
    
    </>
}