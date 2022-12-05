import { Post } from "../components/Post";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../axios";

export const FullPost = () => {
    const {id} = useParams();
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      axios.get(`http://45.147.176.68:80/posts/${id}`).then(res => {
            setData(res.data);

            setLoading(false);
        })
        .catch((err) => {
            console.warn(err);
        })
        
    }, [])

    if(isLoading){
        return (
          <div>Идет загрузка</div>
        );
    }
    else{
      return (
        <Post
        id = {data._id}
        author = {data.author}
        title = {data.title}
        character = {data.character}
        user = {data.user}
        perks = {data.perks}
        viewsCount = {data.viewsCount}
        description = {data.description}
        />
      );
    }
  
}
