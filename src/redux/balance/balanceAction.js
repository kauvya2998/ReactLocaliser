import {TRANSFER} from './balanceTypes'

export const transfer = (details) => {
    return{
        type : TRANSFER,
        payload : details
    }
}