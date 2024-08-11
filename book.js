const { createStore,applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")

const GET_BOOKS='GET_BOOKS'
const ADD_BOOK='ADD_BOOK'

const initialBook={
    books:['a','b'],
    totalBooks:2
 }

 const getbooks=()=>{
    return {
        type:GET_BOOKS
    }
}

 const addbook=(book)=>{
    return{
        type:ADD_BOOK,
        payload:book
    }
 }

 const bookReducer=(state=initialBook,action)=>{
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state
            }
        case ADD_BOOK:
            return{
                books:[...state.books,action.payload],
                totalBooks:state.totalBooks+1
            }
        default:
          return  state;
    }
}

const store=createStore(bookReducer,applyMiddleware(logger))

 store.subscribe(()=>{
    console.log(store.getState());
    
 })

 store.dispatch(addbook('c'))