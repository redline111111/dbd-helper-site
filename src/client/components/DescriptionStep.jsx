import "./components.css";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addDescription } from "../redux/slices/build";

export const DescriptionStep = ({currentStep}) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event) =>{
        setValue(event.target.value);
        dispatch(addDescription(event.target.value));
    }
    if (currentStep !== 2) {
        return null
    } 
    return (
        <>
        <label>
          Описание:
            <div className="dropdown">
                <textarea value={value} onChange={handleChange} className ='ui-form__description'/>
            </div>
        </label>
        </>
    )
}