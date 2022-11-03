import "./components.css";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addCharacter, addTitle } from "../redux/slices/build";

export const InfoStep = ({currentStep}) => {
    const dispatch = useDispatch();
    const [character, setCharacter] = useState(0);
    const [title, setTitle] = useState('');

    const characters = [
        'Survivor',
        'Trapper',
        'Nurse',
        'Wraith',
        'Demogorgon'
    ];
    
    const options = characters.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
     });

    useEffect(() => {
        dispatch(addCharacter(characters[character]));
    }, [])

    if (currentStep !== 0) {
        return null
    } 

    const addTitleHandler = (event) => {
        setTitle(event.target.value);
        console.log(event.target.value);
        dispatch(addTitle(event.target.value));
    }
    const addCharacterHandler = (event) => {
        setCharacter(event.target.value)
        console.log(characters[event.target.value]);
        dispatch(addCharacter(characters[event.target.value]));
    }
    return (
        <>
        <div className="form-row">
            <input value={title} type="text" id="name" required autoComplete="off" onChange={(event) => addTitleHandler(event)}/><label htmlFor="name">Введите название</label>
        </div>
        <div className="dropdown">
            <div className='dropdown__title'>Выберите персонажа:</div>
            <select value={character} onChange={(event) => addCharacterHandler(event)} className="dropbtn">
                {options}
            </select>
        </div>
        </>
    )
}