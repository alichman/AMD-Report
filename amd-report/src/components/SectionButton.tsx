import "../App.css";
import "./SectionButton.css";
import {cats, CatTitleMap} from "../Types";
import {useCallback, useMemo} from "react";

export const SectionButton = (
    {cat, setCat, curCat}
        :{cat: cats; setCat:(cat:cats)=>void, curCat:cats|null}
) => {
    const isSelected = useMemo(() => curCat === cat,[cat, curCat])

    return <div
        className={`SectionButton ${isSelected ? 'selected':''}`}
        onClick={useCallback(() => setCat(cat), [cat, setCat])}
    >
        <h2>{CatTitleMap[cat]}</h2>
    </div>
}