import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import Endpoints from '../api/Endpoints';
import { useParams } from 'react-router-dom'
import FavoritePage from '../pages/FavouritesPage';
import Rating from './Rating';



const ProductList = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [refetch, setRefetch] = useState(1);


    const fetchData = () => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => console.error('Fetch error:', error));
    };

    useEffect(() => {
        fetchData();
    }, [productId, refetch]);

    return (
        <div>
            <h2 className='text-center'>All Latest Products</h2>
            <div className="row">
                {products.map((product, index) => (
                    <Product key={index} data={product} setRefetch={setRefetch} />
                ))}
            </div>
        </div>
    );
};


export default ProductList;