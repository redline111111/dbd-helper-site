import "./components.css";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addPerks } from "../redux/slices/build";
import { useEffect } from "react";

export const PerksStep = ({currentStep}) => {
    const [perks, setPerks] = useState(['0', '0', '0', '0']);
    const [keys, setKeys] = useState([]);
    const dispatch = useDispatch();

    const perksList = {
        agitation: 'Нетерпимость',
        brutalStrength: 'Зверская сила',
        unnervingPresence: 'Пугающее присутствие',
        shadowborn: 'Детище тьмы',
        bloodhound: 'Ищейка',
        predator: 'Хищник ',
    }
    const valuesPerks = Object.values(perksList);
    const options = valuesPerks.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
    });
    useEffect(() => {
        updateKeys(perks);
    }, [])
    const updateKeys = (valuesPerks) =>{
        const keysPerks = Object.keys(perksList);
        let copyKeys = Object.assign([], keys);

        for (let i = 0; i < 4; i++) {
            copyKeys[i] = keysPerks[valuesPerks[i]];
        }

        setKeys(copyKeys);
        return copyKeys;
    }

    const addPerk = (e, number) =>{
        let copyValues = Object.assign([], perks);
        
        copyValues[number] = e;
        setPerks(copyValues);

        const newPerks = updateKeys(copyValues);
        dispatch(addPerks(newPerks));
    }

    if (currentStep !== 1) {
        return null
    } 
    return (
        <>
        <div className="dropdown">
            <div className='dropdown__title'>Выберите перки:</div>
            <select value={perks[0]} onChange={(event) => addPerk(event.target.value, 0)} className="dropbtn" >
                {options}
            </select>
            <div className='dropdown__title'>Выберите перки:</div>
            <select value={perks[1]} onChange={(event) => addPerk(event.target.value, 1)} className="dropbtn" >
                {options}
            </select>
            <div className='dropdown__title'>Выберите перки:</div>
            <select value={perks[2]} onChange={(event) => addPerk(event.target.value, 2)} className="dropbtn" >
                {options}
            </select>
            <div className='dropdown__title'>Выберите перки:</div>
            <select value={perks[3]} onChange={(event) => addPerk(event.target.value, 3)} className="dropbtn" >
                {options}
            </select>
        </div>
        </>
    )
}