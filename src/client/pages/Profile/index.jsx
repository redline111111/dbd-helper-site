import style from './index.module.css';   
import avatar3 from '../../img/avatar3.jpg';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../redux/slices/profile';
import { ProfilePosts } from '../../components/ProfilePosts';
import Moment from 'react-moment';


export const Profile = () => {
    const {login} = useParams();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.profile);
    const posts = useSelector(state => state.profile.profile.data.posts);
    const isLoading = useSelector(state => state.profile.profile.status);

    useEffect(() => {
        dispatch(fetchProfile(login));
        
     }, []);
     console.log(profile)
    if(isLoading !== 'loaded'){
        return (
          <div>Идет загрузка</div>
        );
    }
    else{
        return (
            <div className={style.wrapper}>
                <div className={style.profileCards}>
                    <div className={style.profileInfo}>
                        <div className={style.nickname}>{profile.data.userData.login}</div>
                        <img src={avatar3} alt="" />
                        <div className={style.info}>
                            <div className={style.statistic}>Количество постов: {profile.data.posts.length}</div>
                            <div className={style.statistic}>Дата регистрации: {<Moment format="YYYY/MM/DD" date={profile.data.userData.createdAt}/>}</div>
                        </div>
                    </div>
                    <div className={style.historyBlock}>
                        <div className={style.historyText}>Гайды пользователя</div>
                        <div className={style.cardsBlock}>
                            {posts.map((item, index) => {
                                return <ProfilePosts
                                    key={index}
                                    style= {style}
                                    id = {item._id}
                                    title = {item.title}
                                    character = {item.character}
                                    viewsCount = {item.viewsCount}
                                    createdAt = {item.createdAt}
                                    description = {item.description}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
