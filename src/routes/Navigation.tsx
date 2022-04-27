
import {BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import { FormikAbtractation, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from '../03-forms/pages'
import logo from '../logo.svg'



export const Navigation = () => {
  return (
    
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to={'/register'} className={({isActive})=> isActive ? 'nav-active':''} >Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formikBasic'} className={({isActive})=> isActive ? 'nav-active':''} >Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formikYup'} className={({isActive})=> isActive ? 'nav-active':''} >Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formikComponents'} className={({isActive})=> isActive ? 'nav-active':''} >Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formikAbstractation'} className={({isActive})=> isActive ? 'nav-active':''} >Formik Abstractacion</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/users'} className={({isActive})=> isActive ? 'nav-active':''} >Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='about' element={ <h1>About Page</h1> }/>
                <Route path='formikBasic' element={<FormikBasicPage/>}/>
                <Route path='formikYup' element={<FormikYupPage/>}/>
                <Route path='formikComponents' element={<FormikComponents/>}/>
                <Route path='formikAbstractation' element={<FormikAbtractation/>}/>
                <Route path='register' element={<RegisterPage />}/>

                <Route path='/*' element={<Navigate to={'/register'} replace/>}/>

            </Routes>

        </div>
    </BrowserRouter>
    
  )
}
