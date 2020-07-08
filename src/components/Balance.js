import React from 'react'
import {connect} from 'react-redux'
import '../App.css'

function Balance(props) {
    const src='https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2020/01/17075904/bigstock-Us-Dollar-American-Money-Fal-323524810-min.jpg'
    return (
        <>
             <div className="row">
          <div className="column" style={{backgroundColor:'cream',width:'50%'}}>
            <b>Balance here :</b> <input type="number" value={props.balance}/>
            {props.to ?
            <div>
                <h4>Most Recent Transcation was :</h4>
                <div>To : {props.to}</div>
                <div>Beneficiary A/C No : {props.acno}</div>
                <div>A Sum Of : {props.amount}</div>
                <br />
            </div>
            :
            <h4>No Recent Transcations</h4>
            }
            </div>
            <div className="column" style={{backgroundColor:'white',width:'50%'}}>
            <img src={src} alt="Sorry :( " height="453px" width="100%" />
            </div>
            </div>
         
        </>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        balance : state.balance,
        to : state.to,
        acno : state.acno,
        amt:state.amount
    }
}

export default connect(mapStateToProps)(Balance)
