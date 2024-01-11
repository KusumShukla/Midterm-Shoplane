import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import { useState, useEffect } from "react";
import axios from 'axios';
import Product from '../components/Product';



const ProductPage = () => {
    const [products, setProducts] = useState([])

    const fetchData = () => {
        axios.get('https://fakestoreapi.com/products/')
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        fetchData()
    }, [])
    

    const [isFavorite, setFavorite] = useState(false);
    return (
        <>
           <Navbar/>
           <Header/>
            <div className='Productcontainer'>
                <div className='row'>
                   
                    <div className='col-md-9'>
                        {/* <ProductList /> */}
                        <h2 className='text-center'>All</h2>
                        <button onClick="{()=>handleClick(item)}" className="Favorite-btn">;
                            {isFavorite ? "❤️" : "🖤"}
                        </button>
                      
                        <div className="row">{
                            products.map((product, index) => (<Product data={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default ProductPage;