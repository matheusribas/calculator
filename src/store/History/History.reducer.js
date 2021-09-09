const stateHistory = []

export default function historyReducer (state = stateHistory, action) {
    switch (action.type) {
        case 'ADD_EQUATION': 
            return state.push(action.payload)
        default: 
            return state
    }
}