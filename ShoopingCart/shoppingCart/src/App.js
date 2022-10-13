import "./styles.css";
import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { FiShoppingCart } from "react-icons/fi";
import ProductList from "./components/ProductList";
export default function App() {
  const [apiresponseData, setApiResponseData] = useState();
  const [searchData, setSearchData] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApiResponseData(json));
  }, []);

  const handleChange = (e) => {
    setSearchData(e.target.value);
    // if (searchData.length > 0) {
    // }
  };
  return (
    <>
      <div className="shoppingcart">
        <p className="heading"> Welcome To Shopping Cart</p>
        <FiShoppingCart className="cartIcon" />
        <TextField
          className="searchIcon"
          onChange={handleChange}
          placeholder="Search items here"
          type="search"
          variant="outlined"
          margin="normal"
          value={searchData}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </div>
      {apiresponseData &&
        apiresponseData.map((productDetails) => {
          return <ProductList productDetails={productDetails} />;
        })}
    </>
  );
}
