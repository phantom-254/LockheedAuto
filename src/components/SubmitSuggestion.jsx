import axios from "axios";
import { useState } from "react";
import "./styling/Addproducts.css"; // Can rename this later

const SubmitSuggestion = ({ userType = "client" }) => {
  const [suggestion, setSuggestion] = useState({
    title: "",
    message: "",
  });

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuggestion({ ...suggestion, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Submitting your suggestion...");

    try {
      const response = await axios.post(
        `https://your-backend.com/api/suggestions/${userType}`,
        suggestion
      );

      setLoading("");
      setSuccess("Suggestion submitted successfully!");
      setSuggestion({ title: "", message: "" });
    } catch (err) {
      setLoading("");
      setError("Failed to submit suggestion.");
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-3">
        <h3><b><i>Submit a Suggestion</i></b></h3>

        {loading && <p className="text-success">{loading}</p>}
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Suggestion Title"
            value={suggestion.title}
            onChange={handleChange}
            className="form-control mb-2"
            required
          />

          <textarea
            name="message"
            placeholder="Describe your suggestion..."
            value={suggestion.message}
            onChange={handleChange}
            className="form-control mb-2"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitSuggestion;
