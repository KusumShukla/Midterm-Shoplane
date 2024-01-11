import { useState, useEffect } from "react";
import Category from "./Category";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories/")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setCategories(jsonResponse);
      });
    // .catch(error => console.log(error))
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#FF1493'}} >
      <div className="collapse navbar-collapse" id="navbarSupportedContent"style={{ color: 'black' }}>
        <ul className="navbar-nav mr-auto align-center">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              All <span className="sr-only">(current)</span>
            </a>
          </li>
          {categories.map((category, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={"/" + category}style={{ textTransform: 'capitalize' }}>
                {category}
                <span className="sr-only">(current)</span>
              </a>
            </li>
          ))}

        
        </ul>
        <hr />
      </div>
    </nav>
  );
};

export default Header;
