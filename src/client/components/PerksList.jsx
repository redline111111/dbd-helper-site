import "./components.css";
import { PerksItem } from "./PerksItem";
import { useSelector } from 'react-redux';

import React from "react";

export const PerksList = () => {
    const posts = useSelector(state => state.posts.posts);
    const isPostsLoading = posts.status === 'loading';
    
    return (
        <div className='list'>
            {isPostsLoading ? "Данные загружаются" : 
            posts.items.map((obj,index) =>     
            isPostsLoading ? ("Данные загружаются") : (
             <PerksItem
                key = {index}
                id = {obj._id}
                title = {obj.title}
                character = {obj.character}
                user = {obj.user}
                perks = {obj.perks}
                viewsCount = {obj.viewsCount}
                description = {obj.description}
                imageUrl = {obj.imageUrl}
             />),
            )}
        </div>
    );
};