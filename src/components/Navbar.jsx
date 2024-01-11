import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus,  FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
// import "./Navbar.css"; // Import your CSS file for styling
import{MdContactPhone,MdSupportAgent} from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import {BiSolidHome} from "react-icons/bi";




const Navbar = () => {
  const { numberCart } = useSelector((state) => state);
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);
  const favorites = useSelector((state) => state.favorites);

  const onLogoutHandler = () => {
    localStorage.removeItem("token");
    setLoginStatus(false);
    navigate("/login");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) setLoginStatus(true); // Set login status to true if token exists
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#800080',color:'#00008B'}}>
      <Link className="navbar-brand" to="/" style={{ color: 'red', fontSize: "50px" }}>
        SHOPLANE
      </Link>

      <div className="collapse navbar-collapse"style={{color:'black'}} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"> 
            <Link className="nav-link" to="/"><BiSolidHome />Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"><FcAbout />About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact"><MdContactPhone />Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support"><MdSupportAgent />Support</Link>
          </li>
        </ul>

        <div className="navbar-nav">
          {loginStatus ? (
            <>
              <Link className="nav-link" onClick={onLogoutHandler} to="/login">
                Logout
              </Link>
              <Link className="nav-link" to="/favourites">
                <FaHeart />
                {favorites.length}
              </Link>
            </>
          ) : (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}

          <Link className="nav-link" to="/carts">
            <FaCartPlus />
            {numberCart}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






















// const Navbar = () => {
//     const { numberCart } = useSelector((state) => state);
//     const navigate = useNavigate();
//     const [loginStatus, setLoginStatus] = useState(false);
//     const favorites = useSelector((state) => state.favorites);



//     const onLogoutHandler = () => {
//         // localStorage.removeItem("user");
//         localStorage.removeItem("token");
//         setLoginStatus(false);
//         // window.location.reload();
//         navigate("/login");

//     };

//     console.log(loginStatus)

//     useEffect(() => {
//         let token = localStorage.getItem("token");
//         if (token) setLoginStatus(token);
//     }, []);

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="logo">
//                 <Link className="navbar-brand" to="/" style={{ color: 'darkblue', fontSize: "18px" }}>
//                     SHOPLANE
//                 </Link>
//                  {/* <div> */}
//             <ul> 
//                 <li className="nav-home d-flex">
//         <Link class="nav-link active" aria-current="page" href="/"><BiSolidHome />Home</Link>
//         <Link class="nav-link" to="/about"><FcAbout />About</Link>
//         <Link class="nav-link" to="/contact"><MdContactPhone />Contact</Link> 
//         <Link class="nav-link"to="/support"><MdSupportAgent />Support</Link>
//         </li>
//         </ul>  
//         {/* </div> */}
//             </div>
//             <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//             >
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <div className="mr-auto"></div>
//                 <div className="nav-item dropdown">
//                     {loginStatus ? (
//                         <>
//                             {/* <Link className="m-2" to="/favorites">
//                                 Favorites
//                             </Link> */}
//                             <Link
//                                 className="m-2 text-danger"
//                                 onClick={onLogoutHandler}
//                                 to="/login"
//                             >
//                                 Logout
//                             </Link>
//                         </>
//                     ) : (
//                         <div className="row m-3">
//                            <Link class="nav-link active" aria-current="page" href="/"><BiSolidHome />Home</Link>
        
//                         </div>
//                     )}
//                 </div>
//                 {/* {loginStatus && ( */}
//                 <div>
//                     <Link to="/favourites">
//                         <FaHeart />
//                         {favorites.length}
//                     </Link>
//                 </div>
//                 {/* )} */}
//                 <div className="nav-item dropdown">
//                     <Link to="/carts" className="nav-link btn btn-link">
//                         <FaCartPlus />
//                         {numberCart}
//                     </Link>
//                     <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarCartDropdown">
//                         <Link className="cart" to="/carts">
//                             View Cart
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
