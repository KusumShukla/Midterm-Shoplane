import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './Category';


const CategoryList = () => {
    const catId = 1;
    const [categories, setCategories] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products/categories/')
            .then((response) => response.json())
            .then((jsonResponse) => { setCategories(jsonResponse) })
        // .catch(error => console.log(error))



    }, []);

    return (
        <div>
            {/* <h2 className='text-center'>Category List</h2> */}
            <div className="row">
                <ul class="list-group">
                    {categories.map((category, index) => (
                        <li class="list-group-item" key={index}>
                            <Category key={index} data={category} />

                        </li>

                    ))}
                </ul>
            </div>
        </div>
    );
}
export default CategoryList;