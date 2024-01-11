import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, addToCart, decreaseQuantity, incrementQuantity } from '../redux/actions/cart-actions';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//import{FaRegMinusSquare,FaRegPlusSquare} from "react-icons";
import "./cart.css"
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { numberCart, carts, cartTotalQuantity, cartTotalAmount } = useSelector(state => state)
  console.log(numberCart, carts, cartTotalQuantity, cartTotalAmount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, []);


  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleIncrementQuantity = (product) => {
    dispatch(incrementQuantity(product));
  };

  // console.log(Carts)

  return (
    <div className="cart-container">
      {carts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='row'>
          <div className="w-100 col-md-3" style={{ minWidth: "70%" }}>
            {carts.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="card m-3" style={{ overflow: 'hidden', position: 'relative' }}>
                  <div className="">
                    <span className={`top-0 end-0`} onClick={() => handleDecreaseQuantity(item)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="delete-icon"
                      />
                    </span>
                  </div>
                  <img className="card-top-image m-2" style={{ height: "100px", width: "100px" }} src={item.image} onClick={() => navigate(`/products/detail/${item.id}`)} />
                  <div className="card-body">

                    <h5 className="card-title">{item.title.slice(0, 15)}</h5>
                    
                    
                    <button type="button" class="btn-btn-primary d-flex"onClick={() => handleIncrementQuantity(item)}>+</button>
                    <p className="card-text">{item.quantity}</p>
                    <button type="button" class="btn-btn-primary d-flex" onClick={() => handleDecreaseQuantity(item)}>-</button>
                    
                  </div>
                </div >
              </div>
            ))}
          </div>

          <div className="w-100 col-sm-3 cart-summary">
            <h3>Order summary</h3>
            <p>Total Quantity : {cartTotalQuantity}</p>
            <p>Total Amount : ${cartTotalAmount}</p>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Cart;
