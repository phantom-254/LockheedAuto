import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styling/getproducts.css"; // Assuming you have a CSS file for styling
import ImageCarousel from "./Carousel";
import Footer from "./Footer";

// import Payment from "./Payment"; // Importing Payment component

const GetProducts = () => {
  // State hooks
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Base URL for product images
  const img_url = "https://Tribreed.pythonanywhere.com/static/images/";

  // Fetch products from the API
  const fetchProducts = async () => {
    setLoading("Please wait as we retrieve the products...");
    try {
      const response = await axios.get(
        "https://Tribreed.pythonanywhere.com/api/getproducts"
      );
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError("Failed to load products. Please try again later.");
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div className="myContents">
     <div className="container mt-2">
      <ImageCarousel/>

      {/* Loading and Error Messages */}
      {loading && <p className="text-success">{loading}</p>}
      {error && <p className="text-danger">{error}</p>}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3 mt-3"
      />

      {/* Product Grid */}
    
     <div className="row">
        {filteredProducts.map((product) => (
          <div  className="col-md-3 mt-6">
            <div className="card shadow p-2">
              {/* Product Image */}
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="card-img-top"
              />

              {/* Product Details */}
              <div className="card-body">
                <h5 className="text-primary">{product.product_name}</h5>
                <p className="text-muted">
                  {product.product_description.slice(0, 50)}...
                </p>
                <b className="text-warning">
                  <span className="text-dark">Kes </span>
                  {product.product_cost}
                </b>
                <br />
                {/* Navigation Button */}
                <button
                  className="btn btn-info"
                  onClick={() =>
                    navigate("/Payment", { state: { product }})
                  }
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
     </div>
   </div>
      
  
  );
};

export default GetProducts;