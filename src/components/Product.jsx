import { useState, useEffect } from 'react';
import React from 'react'
import Category from './Category';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favorite-actions';
import { addToCart } from '../redux/actions/cart-actions';
import Rating from './Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setRefetch } = props
  const { id, title, price, category, image, rating } = props.data
  const favorites = useSelector((state) => state.favorites); // Update the reducer name

  const isFavorite = favorites.some((favoriteItem) => favoriteItem.id === id);

  const handleToggleFavorite = () => {
    const isFavorites = favorites.some((favoriteItem) => favoriteItem.id === id);
    if (isFavorites) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(props.data));
    }
    if (typeof setRefetch === 'function') {
      setRefetch((prev) => ++prev);
    } else {
      console.error('setRefetch is not a function');
    }
  };

  const onClickHandler = (product) => {
    dispatch(addToCart(product));
  };





  return (
    <div className="col-sm-3">

      <div className="card" style={{ overflow: 'hidden' }}>
        <img className="card-top-image m-2 " style={{ height: "150px" }} src={image} onClick={() => navigate(`/products/detail/${id}`)} />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 15)}</h5>
          <p className="card-text">{category}</p>
          <Rating rate={rating.rate} count={rating.count} />
          <span className="delete-icon" onClick={handleToggleFavorite}>
            {isFavorite ? "❤️" : "🖤"}
          </span>

          <button className="btn btn-primary btn-block" onClick={() => onClickHandler(props.data)}> Add to Cart</button>

        </div>
      </div >
    </div >
  )
}


export default Product;
