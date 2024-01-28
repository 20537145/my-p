
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../redux/productCreate";

const ProductCreate = () => {
  const dispatch = useDispatch();
  const { status, error, createdProduct } = useSelector(
    (state) => state.product
  );

  const [productData, setProductData] = useState({
    name: "",
    reference: "",
    description: "",
    price: 0,
    quantity: 0,
    availability: false,
    productImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
      productImage: name === "productImage" ? e.target.files[0] : prevData.productImage,
    }));
  };
  

  const handleSubmit = () => {
    const formData = new FormData();
  
    // Append text fields
    formData.append('name', productData.name);
    formData.append('reference', productData.reference);
    formData.append('description', productData.description);
    formData.append('price', productData.price);
    formData.append('quantity', productData.quantity);
    formData.append('Availability', productData.availability);
  
    // Append the image file
    formData.append('productImage', productData.productImage);
    console.log("FormData:", formData);
    dispatch(createProduct(formData));
  };
  
  

  return (
    <div>
      <section className="product-form">
      <div className="form-group">
        <label className="form-label" htmlFor="name">Name:</label>
        <input
        className="form-input"
          type="text"
          id="name"
          name="name"
          value={productData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="reference">Reference:</label>
        <input
        className="form-input"
          type="text"
          id="reference"
          name="reference"
          value={productData.reference}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={productData.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="price">Price:</label>
        <input
        className="form-input"
          type="number"
          id="price"
          name="price"
          value={productData.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="quantity">Quantity:</label>
        <input
        className="form-input"
          type="number"
          id="quantity"
          name="quantity"
          value={productData.quantity}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="availability">Availability:</label>
        <input
        className="form-input"
          type="checkbox"
          id="availability"
          name="availability"
          checked={productData.availability}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="productImage">Product Image:</label>
        <input
        className="form-input"
          type="file"
          id="productImage"
          name="productImage"
          onChange={handleChange}
        />
      </div>
      <button className="form-button" onClick={(e) => handleSubmit(e)} disabled={status === "loading"}>
  {status === "loading" ? "Creating Product..." : "Create Product"}
</button>

      {error && <p className="error-message">{error}</p>}
      {createdProduct && <p>Product created: {createdProduct.name}</p>}
      </section>
    </div>
  );
};

export default ProductCreate;
