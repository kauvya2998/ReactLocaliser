import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {useHistory} from 'react-router-dom'
import * as Yup from 'yup'
import '../App.css';


function SignUp(props) {
    const history=useHistory()
    const initialValues={
        name:'',
        email:'',
        phno:'',
        password:''
    }
    const onSubmit = values => {
        console.log(values)
        localStorage.setItem(values.name,values.password)
        values.name=''
        values.email=''
        values.phno=''
        values.password=''
        history.push('/login')
    }
    
    const validationSchema=Yup.object({
        name:Yup.string().required('Required'),
        email:Yup.string().email('Invalid email').required('Required'),
        phno:Yup.number().integer('Only numbers allowed').required('Required'),
        password:Yup.string().min(5,'Required more than 5 characters').required('Required')
    })

    return (
        <>
        {props.fordisabling? <p>Log out of Current Seesion first !</p>:null}
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            <Form>
        <div className="form-control">
           <Field className="in" placeholder='Name' type='text' id='name' name='name' />
           <div className="error"><ErrorMessage name='name' /></div>
        </div>
        <div className="form-control">
           <Field className="in" placeholder='Email' type='email' id='email' name='email' />
           <div className="error"><ErrorMessage name='email' /></div>
        </div>
        <div className="form-control">
           <Field className="in" placeholder='Phone Number' type='number' id='phno' name='phno' />
           <div className="error"><ErrorMessage name='phno' /></div>
        </div>
        <div className="form-control">
           <Field className="in" placeholder='Password' type='password' id='password' name='password' />
           <div className="error"><ErrorMessage name='password' /></div>
        </div>
        <button type='submit' disabled={props.fordisabling} >SignUp</button>
        </Form>
        </Formik>
        </>
    )
}

export default SignUp
