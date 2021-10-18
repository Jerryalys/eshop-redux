import { ADD_TO_CART } from "./constants" 
import { REMOVE_FROM_CART } from "./constants";
import { SUB_QUANTITY } from "./constants";
import { ADD_QUANTITY } from "./constants";
import { EMPTY_CART } from "./constants";



export const addCart = (product) => {
	return {
		type: ADD_TO_CART,
		payload: product
  }
}

export const removeFromCart = (product) => {
	return {
		type: REMOVE_FROM_CART,
		payload: product
	}
}

export const subtractQuantity = (product) => {				
	return {
		type: SUB_QUANTITY,
		payload: product
	}
}

export const addQuantity = (product) => {
	return {
		type: ADD_QUANTITY,
		payload: product
	}
}

export const emptyCart = () => {
	return {
		type: EMPTY_CART,
	}
}
