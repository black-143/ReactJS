import "./ProductList.css";
export default function ProductList({ productDetails }) {
  return (
    <div className="items">
      <div className="product" title={productDetails.description}>
        <img src={productDetails.image} />
        <p> {productDetails.title} </p>
        <p>₹{productDetails.price}</p>
      </div>
    </div>
  );
}
