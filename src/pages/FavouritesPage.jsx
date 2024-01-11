import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favorite-actions';
import { addToCart } from '../redux/actions/cart-actions';



const FavoritePage = () => {
    const dispatch = useDispatch();
    const favoriteItems = useSelector((state) => state.favorites);
    const favorites = useSelector((state) => state.favorites);
    const handleToggleFavorite = (item) => {
        dispatch(removeFromFavorites(item));
    };

    const onClickHandler = (product) => {
        dispatch(addToCart(product));
        dispatch(removeFromFavorites(product));
    };

    console.log(favoriteItems)

    return (
        <div >
            <h1 className='text-center mt-5'>Favorite Page</h1>
            {favoriteItems.length === 0 ? (
                <p className='text-center'>No items in favorites.</p>
            ) : (
                <ul className='row'>
                    {favoriteItems.map((item, index) => (
                        <div className="col-sm-3" key={index} >
                            <div className="card" style={{ overflow: 'hidden' }}>
                                <img className="card-top-image " style={{ height: "200px" }} src={item.image} />

                                <div className="card-body">
                                    <h5 className="card-title">{item.title.slice(0, 15)}</h5>
                                    <p className="card-text">{item.category}</p>
                                    <button className="btn btn-primary btn-block bg-red" onClick={() => handleToggleFavorite(item)}>
                                        Remove from Favorites
                                    </button>

                                    <button className="btn btn-primary btn-block" onClick={() => onClickHandler(item)} >Add to cart</button>

                                </div>
                            </div >
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoritePage;
