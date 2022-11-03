import { Link } from "react-router-dom";
import "./components.css";

export const Preview = () => {
    return (
        <div className="preview">
            <div className="preview_main">
                <div className="preview__text">
                    Добро пожаловать
                </div>
                <Link to={`/add-post`}>
                    <button className="preview__button main__killer">СОЗДАТЬ БИЛД</button>
                </Link>
            </div>
        </div>
    )
}