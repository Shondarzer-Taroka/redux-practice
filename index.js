const { createStore } = require('redux')
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_USER = 'ADD_USER'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'


// define state

const counterState = {
    count: 0
}

const usersState = {
    users: [
        { name: 'Hasnat Abdullah' }
    ]
}

// action => action takes an object . which has two property, there are type and payload

const incrementCounter = () => {
    return { type: INCREMENT }
}
const decrementCounter = () => {
    return { type: DECREMENT }
}

const incrementbyvalueaction = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: { name: 'Habib' }
    }
}

const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT:

            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            state
    }
}

const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState());

})
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter(10))
store.dispatch(incrementbyvalueaction(90))
store.dispatch(decrementCounter())

