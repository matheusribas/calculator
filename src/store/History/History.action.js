import moment from 'moment'

let id = 0
export function addEquation(eq) {
    id++
    return {
        type: 'ADD_EQUATION',
        payload: {id, equation: eq, created_at: moment().format('DD/MM/YYYY HH:mm:ss')}
    }
}