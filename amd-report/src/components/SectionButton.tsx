import "../App.css";
import "./SectionButton.css";

export const SectionButton = ({title, onPress}:{title: string; onPress?:()=>void}) => {
    return <div className="SectionButton" onClick={onPress}>
        <h2>{title}</h2>
    </div>
}