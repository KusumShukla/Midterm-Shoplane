import constants from 'react-redux';

import { ActionTypes } from '../constants/action-types';

export const addToFavorites = (item) => {
  return {
    type: ActionTypes.ADD_TO_FAVORITES,
    payload: item,
  };
};

export const removeFromFavorites = (item) => {
  return {
    type: ActionTypes.REMOVE_FROM_FAVORITES,
    payload: item,
  };
};
