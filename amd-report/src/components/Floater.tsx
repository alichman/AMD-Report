import {cats} from "../Types";
import "../App.css";
import './Floater.css';

export const Floater = ({cat}:{cat: cats|null}) => {

    if (cat === null){
        return null;
    }
    return <div className="Floater">

    </div>
}