import "./components.css";
import {Preview} from './Preview.jsx'
import { PerksMain } from "./PerksMain.jsx";

export const Perks = () => {
    return (
        <div className="perks-page">
            <Preview/>
            <PerksMain/>
        </div>
           
    );
};