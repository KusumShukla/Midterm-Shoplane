import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
// import Endpoints from '../api/Endpoints';
// import Constants from '../api/Constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart-actions";
import Header from '../components/Header';
import Rating from '../components/Rating';


//

const ProductDetailPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const fetchData = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {

                }
                return response.json();
            })
            .then(data => setProduct(data))
            .catch(error => console.error('Fetch error:', error));
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const onClickHandler = (product) => {
        dispatch(addToCart(product));
        navigate("/")
    };



    return (
        <>
            <div className='container'>
                <div className='wrapper'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={product.image} alt="" className="img-fluid" />
                        </div>
                        <div className='col-md-6'>
                            <h5>{product.category}</h5>
                            <p>{product.title}</p>

                            <p>{product.description}</p>
                            <Rating value={product.rating} maxValue={5} />
                            <h2>
                                <span>$</span>{product.price}
                                {/* You can add additional elements here */}
                            </h2>
                            <button onClick={() => onClickHandler(product)} className='btn btn-primary'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailPage;
