import React, { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name:'',
                    email:'',
                    password1:'',
                    password2:''
                }}
                onSubmit={(values)=>{
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().min(2,'Debe tener al menos 2 caracteres')
                            .max(15,'Debe tener 15 caracteres o menos')
                            .required('Este campo en necesario'),
                        email: Yup.string().email('no es un email valido').required('Este campo en necesario'),
                        password1: Yup.string().min(6,'La contraseña debe tener por lo menos 6 caracteres').required('Este campo en necesario'),
                        password2: Yup.string().oneOf([Yup.ref('password1')],'Las contraseñas no son iguales').required('Este campo en necesario')
            
                    })
                }
            >
                {
                    ({handleReset}) => (
                        <Form>
                            <label htmlFor="Name">Name</label>
                            <Field name="name" type="text"/>
                            <ErrorMessage name='name' component='span'/>
                            
                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name='email' component='span'/>

                            <label htmlFor="password1">password</label>
                            <Field name="password1" type="password"/>
                            <ErrorMessage name='password1' component='span'/>

                            <label htmlFor="password2">Confirm password</label>
                            <Field name="password2" type="password"/>
                            <ErrorMessage name='password2' component='span'/>

                            <button type='submit'>Create</button>
                            <button type='button' onClick={handleReset}>Reset Form</button>
                        </Form>
                    )
                }
                
            </Formik>
            

            
        </div>
    )
}
