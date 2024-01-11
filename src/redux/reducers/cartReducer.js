import { ActionTypes } from "../constants/action-types";

const initialState = {
  numberCart: 0,
  carts: [],
  favorites: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const addToCart = (state, payload) => {
  const existingItemIndex = state.carts.findIndex(
    (cartItem) => cartItem.id === payload.id
  );

  if (existingItemIndex !== -1) {
    state.carts[existingItemIndex].quantity += 1;
  } else {
    state.carts.push({ ...payload, quantity: 1 });
  }

  return {
    ...state,
    numberCart: state.numberCart + 1,
  };
};

const incrementQuantity = (state, payload) => {
  const itemIndex = state.carts.findIndex(
    (cartItem) => cartItem.id === payload.id
  );

  if (itemIndex !== -1) {
    if (state.carts[itemIndex].quantity > 1) {
      state.carts[itemIndex].quantity += 1;
    } else {
      state.carts.push(payload);
    }

    const { total, quantity } = state.carts.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = price * quantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += quantity;
        return cartTotal;
      },
      { total: 0, quantity: 0 }
    );

    const cartTotalAmount = parseFloat(total.toFixed(2));

    return {
      ...state,
      numberCart: state.numberCart + 1,
      cartTotalAmount,
      cartTotalQuantity: quantity,
    };
  }
};

const decreaseQuantity = (state, payload) => {
  const itemIndex = state.carts.findIndex(
    (cartItem) => cartItem.id === payload.id
  );

  if (itemIndex !== -1) {
    if (state.carts[itemIndex].quantity > 1) {
      state.carts[itemIndex].quantity -= 1;
    } else {
      state.carts.splice(itemIndex, 1);
    }

    const { total, quantity } = state.carts.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = price * quantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += quantity;
        return cartTotal;
      },
      { total: 0, quantity: 0 }
    );

    const cartTotalAmount = parseFloat(total.toFixed(2));

    return {
      ...state,
      numberCart: state.numberCart - 1,
      cartTotalAmount,
      cartTotalQuantity: quantity,
    };
  }

  return state;
};

const addToFavorites = (state, payload) => {

  const isItemInFavorites = state.favorites.some(
    (favoriteItem) => favoriteItem.id === payload.id
  );
  console.log("addToFavorites", payload, isItemInFavorites);

  if (isItemInFavorites.length !== 0) {
    state.favorites.push(payload);
  }

  return {
    ...state,
  };
};

const removeFromFavorites = (state, payload) => {
  const updatedFavorites = state.favorites.filter(
    (favoriteItem) => favoriteItem.id !== payload.id
  );

  return {
    ...state,
    favorites: updatedFavorites,
  };
};

const getTotalCart = (state) => {
  const { total, quantity } = state.carts.reduce(
    (cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      const itemTotal = price * quantity;

      cartTotal.total += itemTotal;
      cartTotal.quantity += quantity;
      return cartTotal;
    },
    { total: 0, quantity: 0 }
  );

  const cartTotalAmount = parseFloat(total.toFixed(2));

  return {
    ...state,
    cartTotalAmount,
    cartTotalQuantity: quantity,
  };
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_NUMBER_CART:
      return state;

    case ActionTypes.ADD_TO_CART:
      return addToCart(state, payload);

    case ActionTypes.INCREMENT_QUANTITY:
      return incrementQuantity(state, payload);

    case ActionTypes.DECREASE_QUANTITY:
      return decreaseQuantity(state, payload);

    case ActionTypes.ADD_TO_FAVORITES:
      return addToFavorites(state, payload);

    case ActionTypes.REMOVE_FROM_FAVORITES:
      return removeFromFavorites(state, payload);

    case ActionTypes.GET_TOTAL_CART:
      return getTotalCart(state);

    case ActionTypes.EMPTY_CART:
      return {
        ...state,
        numberCart: 0,
        carts: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
