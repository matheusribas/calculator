import { createStore, combineReducers } from 'redux'
import historyReducer from './History/History.reducer'

const rootReducer = combineReducers({
    history: historyReducer
})

const store = createStore(rootReducer)

export default store