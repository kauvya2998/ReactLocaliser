import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {useHistory} from 'react-router-dom'
import * as Yup from 'yup'
import '../App.css';


function Login(props) {
    const history=useHistory()
    const initialValues={
        name:'',
        password:''
    }
    const onSubmit = values => {
        console.log(values)
        if(localStorage.getItem(values.name)===values.password){
        props.user(values.name)
        values.name=''
        values.password=''
        history.push('/')
        } 
        else{
            alert("Invalid Login credentials")
        }       
    }
    
    const validationSchema=Yup.object({
        name:Yup.string().required('Required'),
        password:Yup.string().min(5,'Required more than 5 characters').required('Required')
    })

    return (
        <>
         {props.fordisabling? <p>Log out of Current Seesion first !</p>:null}
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema} >
            <Form>
        <div className="form-control">
           <Field className="in" placeholder='Name' type='text' id='name' name='name' />
           <div className="error"><ErrorMessage name='name' /></div>
        </div>
        <div className="form-control">
           <Field className="in" placeholder='Password' type='password' id='password' name='password' />
           <div className="error"><ErrorMessage name='password' /></div>
        </div>
        <button type='submit' disabled={props.fordisabling}>Login</button>
        </Form>
        </Formik>
        </>
    )
}

export default Login
