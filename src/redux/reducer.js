import { ADD_TO_CART } from './constants';
import { REMOVE_FROM_CART } from './constants';
import { ADD_QUANTITY} from './constants';
import { SUB_QUANTITY}  from './constants';
import { EMPTY_CART}  from './constants';


const initialState = {
    cart: [],
  };
const ShoppinReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case ADD_TO_CART:
      console.log('action: ', action);
      const newCart = [...state.cart]
      
  newCart.push(action.payload)
  console.log('newCart: ', newCart);
    return {
        ...state,
        cart: newCart
    };
    case REMOVE_FROM_CART:
    return {
        ...state,
        products: state.products.map(product =>
        product.id === action.id
            ? {...product, selected: false, quantity: 1}
            : product,
        ),
    };
    case ADD_QUANTITY:
    return {
        ...state,
        products: state.products.map(product =>
        product.id === action.id
            ? {...product, quantity: product.quantity + 1}
            : product,
        ),
    };
    case SUB_QUANTITY:
    return {
        ...state,
        products: state.products.map(product =>
        product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
            }
            : product,
        ),
    };
    case EMPTY_CART:
    return {
        ...state,
        products: state.products.map(product =>
        product.selected
            ? {...product, selected: false, quantity: 1}
            : product,
        ),
    };
    default:
    return state
  }
}
  export default ShoppinReducer;