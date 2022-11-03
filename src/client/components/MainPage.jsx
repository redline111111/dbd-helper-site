import "./components.css";
import { Link } from 'react-router-dom';

export const MainPage = () => {
    return (
        <main className="main">
            <div className="main__background">
                <div className="main__buttons">
                    <Link to={'/KillersPerks'}>
                        <button className="main__survivor">
                            БИЛДЫ ВЫЖИВШИХ
                        </button>
                    </Link>
                    <Link to={'/KillersPerks'}>
                        <button className="main__killer">
                            БИЛДЫ УБИЙЦ
                        </button>
                    </Link>
                    
                </div>

            </div>
        </main>
    )
}