import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { transfer } from '../redux/balance/balanceAction'
import '../App.css'

function Transfer(props) {
    const history = useHistory()
    const src = 'data:image/jpeg;base64,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'
    
    const initialValues={
        amount:null,
        acno:'',
        to:'',
        cnfacno:'',
        ifsc:''
    }
    
    const onSubmit = values => {
        props.transfer(values)
        history.push('/balance')
    }
    
    const validationSchema=Yup.object({
        to:Yup.string().required('Required'),
        acno:Yup.string().required('Required'),
        cnfacno:Yup.string()
        .oneOf([Yup.ref('acno'), null], 'A/C numbers must match'),
        amount:Yup.number().integer('Only numbers allowed').required('Required'),
        ifsc:Yup.string().required('Required')
    })


    //const clicker = (to,acno,amount) => {
    //    let details={
      //      to:to,
        //    acno:acno,
          //  amount:parseInt(amount)
        //}
        //props.transfer(details)
    //}
    return (
        <div >
            <img src={src} alt="Sorry :(" height="453px" width="100%" />
            <div className="transferBG" >
            <h1 style={{color:'white'}} >  Fund Transfers </h1>
            <h6> !Fund transfers made easy! </h6>

            <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            <Form>
        <div className="form-control">
           <Field className="in" placeholder='Beneficiary Name' type='text' id='to' name='to' />
           <div className="error"><ErrorMessage name='to' /></div>
        </div>
        <div className="form-control">
           <Field className="in" placeholder='IFSC Code' type='text' id='ifsc' name='ifsc' />
           <div className="error"><ErrorMessage name='ifsc' /></div>
        </div>
        <div className="form-control">
           <Field className="in" placeholder='A/C No' type='text' id='acno' name='acno' />
           <div className="error"><ErrorMessage name='acno' /></div>
        </div>
        <div className="form-control">
           <Field className="in" placeholder='Confirm A/C No' type='text' id='cnfacno' name='cnfacno' />
           <div className="error"><ErrorMessage name='cnfacno' /></div>
        </div>
        <div className="form-control">
           <Field className="in" placeholder='Amount' type='number' id='amount' name='amount' />
           <div className="error"><ErrorMessage name='amount' /></div>
        </div>
        <button type='submit' >Transfer</button>
        </Form>
        </Formik>
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        transfer : (details) => dispatch(transfer(details))
    }
}

export default connect(null,mapDispatchToProps)(Transfer)

