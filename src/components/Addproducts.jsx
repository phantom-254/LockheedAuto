import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./styling/Addproducts.css"; // Assuming you have a CSS file for styling


const AddProduct = () => {
  // Centralized state for product details
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    photo: null, // For file uploads
  });

  // State for feedback messages
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle file input separately
  const handleFileChange = (e) => {
    setProduct({ ...product, photo: e.target.files[0] });
  };

  // Submit form data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Uploading product, please wait...");

    try {
      const data = new FormData();
      data.append("product_name", product.name);
      data.append("product_cost", product.price);
      data.append("product_description", product.description);
      data.append("product_photo", product.photo);

      const response = await axios.post(
        "https://Tribreed.pythonanywhere.com/api/addproduct",
        data
      );

      setLoading("");
      setSuccess(response.data.message);

      // Reset the form
      setProduct({
        name: "",
        price: "",
        description: "",
        photo: null,
      });
    } catch (err) {
      setLoading("");
      setError(err.message);
    }
  };

  return (
    <div className=" row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-3 height-300">
        <h3><b><i>Add Your Vehicle</i></b></h3>

        {/* Feedback messages */}
        {loading && <p className="text-success">{loading}</p>}
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}

        {/* Product form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
            required
          />
          

          <input
            type="number"
            name="price"
            placeholder="Enter product price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            required
          />
     

          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            className="form-control"
            required
          />
        

          <textarea
            name="description"
            placeholder="Enter product description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
          

          <button type="submit" className="btn btn-info">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;