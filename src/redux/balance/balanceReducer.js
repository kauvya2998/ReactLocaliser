import {TRANSFER} from './balanceTypes'

const initialState = {
    to:'',
    acno:'',
    amount:'',
    balance : 50000
}


const balanceReducer = (state=initialState, action) =>{
    switch(action.type){
        case TRANSFER : return {
            ...state,
            to:action.payload.to,
            acno:action.payload.acno,
            amount:action.payload.amount,
            balance : parseInt(state.balance) - parseInt(action.payload.amount)
        }
        default : return state
    }
}

export default balanceReducer