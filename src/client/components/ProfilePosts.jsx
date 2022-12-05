import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export const ProfilePosts = ({
    id,
    title, 
    character, 
    viewsCount, 
    createdAt, 
    description,
    style
 }) => {
    return (
        <Link to={`/FullPost/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={style.blogCard}>
                <div className={style.meta}>
                <div className={style.photo}>
                    <img src={`http://45.147.176.68:80/uploads/${character}.png`} alt={`${character}`} />
                </div>
                <ul className={style.details}>
                    <li className={style.date}>Дата создания: {<Moment format="YYYY/MM/DD" date={createdAt}/>}</li>
                </ul>
                </div>
                <div className={style.description}>
                <h1>{title}</h1>
                <h2>{character}</h2>
                <p>{description}</p>
                </div>
            </div>
        </Link>
    );
};