

import { ActionTypes } from '../constants/action-types';

export const addToCart = (product) => {
  console.log(product, 'addToCart')
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product
  }
}
export const decreaseQuantity = (product) => {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: product
  }
}

export const deleteFromCart = (product) => {
  return {
    type: ActionTypes.DELETE_CART,
    payload: product
  }
}

export const getCartTotal = () => {
  return {
    type: ActionTypes.GET_TOTAL_CART
  }
}

export const incrementQuantity = (product) => {
  console.log(product)
  return {
    type: ActionTypes.INCREMENT_QUANTITY,
    payload: product
  }
}
