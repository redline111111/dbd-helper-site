import './style.css'
import {InfoStep} from '../../components/InfoStep.jsx'
import { useState } from 'react';
import { PerksStep } from '../../components/PerksStep';
import { DescriptionStep } from '../../components/DescriptionStep';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate, useNavigate } from 'react-router';
import axios from "../../../axios";
import { clear } from '../../redux/slices/build';

export const AddPost = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(selectIsAuth);
    const [step, setStep] = useState(0);
    const build = useSelector((state) => state.build.build);
    const dispatch = useDispatch();
    const handleStepPrev = () =>{
        const nextStep = step - 1;
        setStep(nextStep);
    }
    const handleStepNext = () =>{
       const nextStep = step + 1;
        setStep(nextStep);
    }
    const checkForm = () => {
        const {title, perks} = build;
        if (title !== ''){
            let set = new Set(perks);
            if (set.size === 4){
                return true;
            }
            alert('Ошибка!');
        }
        else {
            alert('Введите название!');
        }
        return false;
    }
    const handleSubmit = async (event) =>{
        try {
            event.preventDefault();
            if(checkForm()){
                const data = await axios.post('/posts', build);
                dispatch(clear);
                navigate(`/FullPost/${data.data._id}`);
            }; 
        } catch (error) {
            console.warn('Ошибка при создании статьи');
        }
    }
    
    if(!isAuth){
        return <Navigate to='/'/>
    }
    return (
        <div className="add-post">
            <form className="ui-form" onSubmit = {handleSubmit}>
                <h3>СОЗДАТЬ БИЛД</h3>
                <InfoStep
                    currentStep={step} 
                />
                <PerksStep
                    currentStep={step} 
                />
                <DescriptionStep 
                    currentStep={step}
                 />
                 
               <div className='ui-form__buttons'>
                    <input type="button" value="Назад" className={step === 0 ? 'none' : 'ui-form__submit'} onClick = {handleStepPrev}/>
                    <input type="button" value="Дальше" className={`ui-form__submit ${step === 0 ? 'solo' : ''} ${step === 2 ? 'none' : ''}`} onClick = {handleStepNext} />
                    <input type="submit" value="Создать" className={`ui-form__submit ${step === 2 ? '' : 'none'}`}/>
                </div>
            </form>
        </div>
    );
 }