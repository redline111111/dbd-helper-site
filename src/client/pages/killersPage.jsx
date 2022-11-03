import { Perks } from '../components/Perks.jsx';
import {useEffect} from 'react';
import { fetchPosts } from '../redux/slices/posts.js';
import { useDispatch } from 'react-redux';

export const KillersPage = () => {
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchPosts());
  }, []);

   return (
      <Perks/>
   )
}
