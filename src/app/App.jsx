import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from '../page/Home/Home'
import Mui from '../page/Mui/Mui'
import Button from '@mui/material/Button';
import Dashboard from '../page/Dashboard/Dashboard';
import AxiosPage from '../page/AxiosPage/AxiosPage';
import Login from '../page/Login/Login';
import Register from '../page/Register/Register';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const [login, setLogin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('afsd-7-token')) {
      setLogin(true)
    } else {
      setLogin(false)
    }

  }, [])

  return (
    <div>
      {
        login ?
          <Dashboard />
          :
          <Routes>
            <Route path='*' element={<Navigate to={'/login'} />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
      }
      {/* <Home/> */}
      {/* <Mui/> */}
      {/* <Dashboard/> */}
      {/* <AxiosPage/> */}
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  )
}

export default App
