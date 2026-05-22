import {CatHeaderMap, cats} from "../Types";
import "../App.css";
import './Floater.css';
import {goals} from "../Text/goals";
import {useMemo} from "react";
import {role} from "../Text/role";

const GoalsContent = () => {
    return <div className="hScroll">
        <div>
        {goals.map(g => <div className="vContent" style={{width:400}}>
            <h3>{g.title}</h3>
            <p>{g.content}</p>
        </div>)}
        </div>
    </div>
}

const RoleContent = () => {
    return <div className="vContent">
        <p>{role}</p>
    </div>
}

export const Floater = ({cat}:{cat: cats|null}) => {

    const content = useMemo(() => {
        switch (cat) {
            case cats.goals:
                return GoalsContent();
            case cats.role: {
                return RoleContent();
            }
            default:
                return null;
        }
    }, [cat]);

    if (cat === null){
        return null;
    }
    return <div className="Floater">
        <h2>{CatHeaderMap[cat]}</h2>
        {content}
    </div>
}