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

      let newCart = [...state.cart]
      let itemIndex = state.cart.findIndex(obj => obj.id === action.payload.id)
      let currItem = state.cart[itemIndex]

      if (currItem) {
      currItem.quantity = parseInt(currItem.quantity) + 1
      state.cart[itemIndex] = currItem
      newCart = [...state.cart]

      }

      else {

      newCart = newCart.concat(action.payload)
      }

      return {
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