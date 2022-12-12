import  rootreducers from './redux/reducers/main'
import { createStore } from 'redux'

const Store = createStore(
    rootreducers
)

export default Store