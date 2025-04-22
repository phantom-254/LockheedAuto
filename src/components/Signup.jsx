import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import './styling/Signup.css'
import Footer from "./Footer";

const Signup = () => {

  //create hooks that will enable you store the different information entered by the user om the form
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // Initialize three additional hooks to store the state of your application when the signup button is clicked.
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // create a function to handle the submit logic
  const register = async (e) =>{
    // prevent your site from reloading
    e.preventDefault();

    // update the loading hook with a message
    setLoading("Please wait as we submit your details...")

    try{
      // create a form data object that will hold the signup details
      const data = new FormData();

      // add/append the different infomation onto the form data
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      // post your data through your endpoint
      // Here we shall use axios, which is a library that enables use to interact with http requests.
      const response = await axios.post("https://sengi2025.pythonanywhere.com/api/signup", data);

      // update the loading with back to default
      setLoading("");

      // update the success hook with the response message
      setSuccess(response.data.message)

      // clear the hooks for the form input fields
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

    }
    catch(error){
      // catch any error if there is
      setLoading("");
      setError(error.message)
      // setError("Sorry something went wrong")
    }
  }
  return (
    <div className="signupCard">
      <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h3><b><i>Sign Up</i></b> </h3>

        {/* Feedback Messages */}
        {loading && <b className="text-warning">{loading}</b>}
        {error && <b className="text-danger">{error}</b>}
        <b>{success}</b>

        {/* Signup Form */}
        <form onSubmit={register}>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />

          <input
            type="number"
            name="phone"
            placeholder="Enter your phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            required
          />

          <input
            type="submit"
            value="Sign Up"
            className="btn btn-outline-success"
          />
          <br /><br />

          <p>
            Already have an account?{" "}
            <Link to="/signin" className="text-info">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default Signup;