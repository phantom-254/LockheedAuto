import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styling/getproducts.css";
import ImageCarousel from "./Carousel";
import Footer from "./Footer";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const img_url = "https://Tribreed.pythonanywhere.com/static/images/";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://Tribreed.pythonanywhere.com/api/getproducts"
        );
        setProducts(response.data);
        setError("");
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="myContents">
      <div className="container mt-2">
        <ImageCarousel />

        {/* Loading Spinner */}
        {loading && (
          <div className="text-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Please wait as we retrieve the products...</p>
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-danger text-center">{error}</p>}

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mb-4 mt-3"
        />

        {/* Product Grid */}
        <div className="row">
          {!loading && filteredProducts.length === 0 && (
            <p className="text-center text-muted">No products found.</p>
          )}

          {filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card shadow p-2 h-100">
                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name || "Product image"}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="text-primary">{product.product_name}</h5>
                  <p className="text-muted">
                    {product.product_description.slice(0, 50)}...
                  </p>
                  <b className="text-warning">
                    <span className="text-dark">Kes </span>
                    {product.product_cost}
                  </b>
                  <br />
                  <button
                    className="btn btn-info mt-2"
                    onClick={() =>
                      navigate("/Payment", { state: { product } })
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default GetProducts;
