import "../App.css";
import "./SectionButton.css";
import {cats, CatTitleMap} from "../Types";
import {useCallback, useMemo} from "react";

export const SectionButton = (
    {cat, setCat, curCat}
        :{cat: cats; setCat:(cat:cats|null)=>void, curCat:cats|null}
) => {
    const isSelected = useMemo(() => curCat === cat,[cat, curCat])
    const onPress = useCallback(() => setCat(isSelected ? null : cat), [cat, isSelected, setCat])

    return <div
        className={`SectionButton ${isSelected ? 'selected':''}`}
        onClick={onPress}
    >
        <h2>{CatTitleMap[cat]}</h2>
    </div>
}