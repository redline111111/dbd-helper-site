import { Login } from "../pages/Login";
import "./components.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth, logout } from "../redux/slices/auth.js";

export const Header = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const onClickLogout = () => {
        if(window.confirm('Вы действительно хотите выйти?')){
            dispatch(logout());
        }
    }

    return (
        <header className="header">
            <Link to="/">
                <button className="header__logo">DBD-HELPER</button> 
            </Link>
           <div className="header__user">
            {!isAuth ? (
            <>
                <Link to="/Login">
                    <button className="header__login">Вход</button> 
                </Link>
                <Link to="/Registration">
                    <button className="header__login">Регистрация</button> 
                </Link>
               
             </>
             ) : (
            <>
            <Link to="/Profile">
                <button className="header__login">Профиль</button> 
            </Link>
             <button className="header__login" onClick = {onClickLogout}>Выход</button> 
             </>
             )}
            
           </div>
           
        </header>
    )
}