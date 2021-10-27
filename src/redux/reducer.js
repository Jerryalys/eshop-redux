import { ADD_TO_CART } from './constants'
import { REMOVE_FROM_CART } from './constants'
// import { ADD_QUANTITY} from './constants'
// import { SUB_QUANTITY}  from './constants'
// import { EMPTY_CART}  from './constants'


const initialState = {
    cart: [],
  }
const ShoppinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = [...state.cart]
      
      newCart.push(action.payload)
      return {
        ...state,
        cart: newCart
      }

    case REMOVE_FROM_CART:
      const cart = [...state.cart]
      const updatedCart = cart.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        cart: updatedCart
      }
    
    default:
    return state
  }
}
  export default ShoppinReducer