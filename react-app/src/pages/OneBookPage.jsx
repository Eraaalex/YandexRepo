import {Book} from "../components/Book/Book";
import {Reviews} from "../components/Reviews/Reviews"
export const OneBookPage =(props) =>{
    return <div>
         <Book book ={props.book} genreName={props.genreName}></Book>
        <Reviews book={props.book}></Reviews>
    </div>
    
}