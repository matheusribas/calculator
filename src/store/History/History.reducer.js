export default function historyReducer (state = [], action) {
    switch (action.type) {
        case 'ADD_EQUATION': 
            return state = [...state, action.payload]
        default: 
            return state
    }
}