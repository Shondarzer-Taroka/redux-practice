const { createStore, combineReducers } = require("redux")

 
const GET_BOOKS='GET_BOOKS'
const ADD_BOOK='ADD_BOOK'

const GET_PRODUCT = 'GET_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'

 const initialBook={
    books:['a','b'],
    totalBooks:2
 }

const initialProduct = {
    products: ['potato', 'egg'],
    productsLength: 2
}

const getproduct = () => {
   return {
        type: GET_PRODUCT
    }
}

const addproduct=(product)=>{
    return {
        type:ADD_PRODUCT,
        payload:product
    }
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


 const productReducer=(state=initialProduct,action)=>{
        switch (action.type) {
            case GET_PRODUCT:
                return {
                    ...state
                }
            case ADD_PRODUCT:
                return{
                    products:[...state.products,action.payload],
                    productsLength:state.productsLength+1
                }
            default:
              return  state;
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


  let combinedStore=combineReducers({
    productReducer,
    bookReducer
  })
  let store=createStore(combinedStore)
  store.subscribe(()=>{
   console.log(store.getState().bookReducer);
   console.log(store.getState().productReducer);
  })


   store.dispatch(addproduct('tomato'))
store.dispatch(getproduct())