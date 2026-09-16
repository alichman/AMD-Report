import {CatHeaderMap, cats} from "../Types";
import "../App.css";
import './Floater.css';
import {goals1, goals2, Goal} from "../Text/goals";
import {useMemo, useState} from "react";
import {role} from "../Text/role";
import {about} from "../Text/about";

const GoalsContent = ({goals}:{goals: Goal[]}) => {

    return <div className="hScroll">
        <div>
            {goals.map((g: Goal) => <div className="vContent" style={{width:400}}>
            <h4>{g.title}</h4>
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

const AboutContent = () => {
    return <div className="vContent">
        <p>{about}</p>
    </div>
}

export const Floater = ({cat}:{cat: cats|null}) => {
    const [sem, setSem] = useState<0|1>(0)
    const goals = useMemo(() => [goals1, goals2][sem], [sem])

    const content = useMemo(() => {
        switch (cat) {
            case cats.goals:
                return GoalsContent({goals});
            case cats.role:
                return RoleContent();
            case cats.about:
                return AboutContent();
            default:
                return null;
        }
    }, [cat, sem]);

    if (cat === null){
        return null;
    }
    return <div className="Floater">
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <div style={{display: 'flex', paddingLeft: 50, paddingTop: 40}}>
                <div
                    className={'semButton' + (sem === 0 ? ' selected' : '')}
                    onClick={() => setSem(0)}
                >Sem 1
                </div>
                <div
                    className={'semButton' + (sem === 1 ? ' selected' : '')}
                    onClick={() => setSem(1)}
                >Sem 2
                </div>
            </div>
            <h2>{CatHeaderMap[cat]}</h2>
            <div style={{width: 200}}/>
        </div>
        {content}
    </div>
}