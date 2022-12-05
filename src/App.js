import { HomePage } from './client/pages/HomePage.jsx';
import { Routes, Route } from 'react-router-dom';
import { Header } from './client/components/Header.jsx';
import { KillersPage } from './client/pages/killersPage.jsx';
import { FullPost } from './client/pages/FullPost.jsx';
import { Login } from './client/pages/Login/index.jsx';
import { AddPost } from './client/pages/AddPost/index.jsx';
import { Registration } from './client/pages/Registration/index.jsx';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthMe } from './client/redux/slices/auth.js';
import { Profile } from './client/pages/Profile/index.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/KillersPerks" element={<KillersPage/>} />
        <Route path="/Login" element={<Login/>} /> 
        <Route path="/Registration" element={<Registration/>} /> 
        <Route path="/add-post" element={<AddPost/>} /> 
        <Route path="/Profile/:login" element={<Profile/>} /> 
        <Route path="/FullPost/:id" element={<FullPost/>} /> 
      </Routes>
    </>
  );
};

export default App;
