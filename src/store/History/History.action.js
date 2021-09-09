export function addEquation(eq) {
    return {
        type: 'ADD_EQUATION',
        payload: {equation: eq, create_at: new Date()}
    }
}