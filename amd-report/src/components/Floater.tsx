import {CatHeaderMap, cats} from "../Types";
import "../App.css";
import './Floater.css';
import {goals} from "../Text/goals";
import {useMemo} from "react";

const GoalsContent = () => {
    return <div className="hScroll">
        <div>
        {goals.map(g => <div className="vContent">
            <h3>{g.title}</h3>
            <p>{g.content}</p>
        </div>)}
        </div>
    </div>
}

export const Floater = ({cat}:{cat: cats|null}) => {

    const content = useMemo(() => {
        switch (cat) {
            case cats.goals:
                return GoalsContent();
            default:
                return null;
        }
    }, [cat])

    if (cat === null){
        return null;
    }
    return <div className="Floater">
        <h2>{CatHeaderMap[cat]}</h2>
        {content}
    </div>
}