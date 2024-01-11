import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function CategoryPage() {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    const fetchData = () => {
        axios.get('https://fakestoreapi.com/products/category/' + category)
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        fetchData()
    }, [category])
    return (
        <>
        <Navbar/>
        <Header/>
        <div>
            <div className='container'>
                <div className='row'>

                    <h2 className='text-center'>{category}</h2>
                    <div className="row">{
                        products.map((product, index) => (<Product key={index} data={product} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
        </>
    )
   
}

export default CategoryPage
