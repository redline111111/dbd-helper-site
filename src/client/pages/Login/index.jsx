import "./style.css";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const isAuth = useSelector(selectIsAuth);

    const dispatch = useDispatch();
    const {register, handleSubmit, setError} = useForm({
        defaultValues: {
            login: '',
            password: ''
        }
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchUserData(values));

        if(!data.payload){
           return alert ("Ошибка авторизации");
        }

        if('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token);
        }
    }

    if(isAuth){
        return <Navigate to="/"/>
    }

    return (
        <div className="login">
            <div className="registration-cssave">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center">Форма входа</h3>
                    <div className="form-group">
                        <input className="form-control item" type="text" name="username" maxLength="15" minLength="3" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Логин" {...register('login', { required: "Укажите логин"})} />
                    </div>
                    <div className="form-group">
                        <input className="form-control item" type="password" name="Пароль" minLength="5" id="password" placeholder="Пароль" {...register('password', { required: "Укажите пароль"})}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block create-account" type="submit">Вход в аккаунт</button>
                    </div>
                </form>
            </div>
        </div>
    );
  
}
