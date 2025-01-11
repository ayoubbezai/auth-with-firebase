import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Protected from './components/Protected.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='signup' element={<Signup/>}  />
      <Route path='login' element={<Login/>}  />
      <Route path='/' element={<Protected />}>
        <Route path='/' element={<Home />}/>
        <Route path='profile' element={<Profile />}/>
      </Route>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
