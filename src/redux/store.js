import {createStore} from 'redux'
import balanceReducer  from './balance/balanceReducer'

const store = createStore(balanceReducer)

export default store
