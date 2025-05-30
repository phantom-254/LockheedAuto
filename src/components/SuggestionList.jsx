import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const SuggestionList = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/getsuggestions");
        setSuggestions(response.data);
        setError("");
      } catch (err) {
        setError("Failed to load suggestions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  const filtered = suggestions.filter(s =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {/* <ImageCarousel /> */}

      <input
        type="text"
        className="form-control my-3"
        placeholder="Search suggestions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {filtered.map((s) => (
          <div className="col-md-4 mb-3" key={s.id}>
            <div className="card shadow p-3">
              <h5>{s.title}</h5>
              <p className="text-muted">{s.category}</p>
              <p>{s.body.slice(0, 60)}...</p>
              <p>Status: <b>{s.status}</b></p>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/suggestion-detail", { state: { suggestion: s } })}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SuggestionList;
