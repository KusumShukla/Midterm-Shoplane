import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cart-actions';

const Category = (props) => {
    console.log(props)
    const dispatch = useDispatch();
    const { catName, catImage } = props.data;
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };
    return (
        <div className="col-sm-3">

            <div className="card">
                <img className="card-top-image" src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg/" + catImage} />

                <div className="card-body">
                    <h5 className="card-title">{catName}</h5>

                    <div  className="btn btn-primary btn-block" 
                    onClick={()=>handleAddToCart()}
                    >Add to Cart</div>
                </div>
            </div>
        </div>



    )
}
export default Category;