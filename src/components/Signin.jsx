import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './styling/SignIn.css'

const Signin = () => {

  // initialize hooks to help you store data entered by the use on the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //initialize three additional hooks to help you manage the state of your application
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // create a navigate hook that will redirect a person to another page after a successful login
  const navigate = useNavigate();

  // create a function to handle the user signin
  const login = async (e) =>{
    //prevent your site from reloading
    e.preventDefault();

    // update the loading hook with a message
    setLoading("Please wait as we log you in...")

    try{
      //create a new form data object
      const data = new FormData()

      // append the two details i.e email and password onto the form data
      data.append("email", email);
      data.append("password", password);

      // post the data through the API
      const response = await axios.post("https://sengi2025.pythonanywhere.com/api/signin", data)

      // check whether the details return from the api contain a key user
      if(response.data.user){
        setLoading("");
        // setSuccess("Login Success")
        navigate("/")
      }
      else{
        setLoading("");
        setError("Invalid login details. Please try again...")
      }
    }
    catch(error){
      setLoading("");
      setError(error.message)
    }
  }
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-4 card shadow p-2">
        <h3><b><i>Sign In</i></b> </h3>

        {/* Feedback Messages */}
        {loading && <b className="text-warning">{loading}</b>}
        {error && <b className="text-danger">{error}</b>}
        <b>{success}</b>

        {/* Login Form */}
        <form onSubmit={login}>
        <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />

          <br />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
          <br />

          <input
            type="submit"
            value="Sign In"
            className="btn btn-outline-success"
          />
          <br /><br />

          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-info">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    
    </div>
    
  );
  
};

export default Signin;