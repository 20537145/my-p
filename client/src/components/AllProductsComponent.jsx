
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/AllProducts";

const AllProductsComponent = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productsList.products);
  console.log(products.Availability)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])
  return (
    <div className="product-cont">
    <section className="products-section">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img src={`http://localhost:6010/uploads/${product.image}`} alt={` ${product.name}`} />
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="price">{product.price} DT</p>
            <p className={ product.Availability ? 'in-stock' : 'out-of-stock'}>
              {product.Availability ? 'En stock' : 'Hors stock'}
            </p>
          </div>
        </div>
      ))}
    </section>
  </div>
  );
};

export default AllProductsComponent;
