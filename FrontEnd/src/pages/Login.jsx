import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import Base from "../components/Base";
import { setUser } from "../Features/persist/persist";
import { login } from "../Features/user/userSlice";
import { storageItem } from "./../services/helper";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  function validateEmail(inputText) {
    if (/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/.test(inputText)) return true;
    else return false;
  }

  const handleChange = (event, field) => {
    document.getElementById("test1").style = "color:black";
    document.getElementById("test2").style = "color:black";
    document.getElementById("test1").innerHTML = "Please enter your Email Id ";
    document.getElementById("test2").innerHTML = "Password ";
    let actualValue = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
    if (document.getElementById("exampleEmail").value.trim() === "") {
      document.getElementById("test1").style = "color:red";
      document.getElementById("test1").innerHTML = "Please enter your Email Id ";
    } else if (loginDetails.password.trim() === "") {
      document.getElementById("test2").style = "color:red";
      document.getElementById("test2").innerHTML = "Please enter password";
    } else {
      if (validateEmail(document.getElementById("exampleEmail").value)) {
        document.getElementById("test1").style = "color:green";
        document.getElementById("test2").style = "color:green";
        document.getElementById("test1").innerHTML = "Correct format of email id ";
        document.getElementById("test2").innerHTML = "Correct format of password";
        dispatch(login(loginDetails))
          .then((response) => {
            storageItem.setItem("token", response.data.jwt);
            toast.success(response.data.message);
            dispatch(setUser(response.data.user));
            if (response.data.user.role === "ROLE_USER") {
              navigate("/userhome");
            } else if (response.data.user.role === "ROLE_ADMIN") {
              navigate("/adminhome");
            }
          })
          .catch((error) => {
            toast.error(error.response.data.message);
          });
      } else {
        document.getElementById("test1").style = "color:red";
        document.getElementById("test1").innerHTML = "Incorrect format of email id ";
      }
    }
  };

  return (
    <Base>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <Form className="login-form">
          <FormGroup className="form-group">
            <div id="test1" className="form-feedback">Please enter your Email Id</div>
            <Input
              required
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter Email"
              value={loginDetails.email}
              onChange={(e) => handleChange(e, "email")}
              className="login-input"
            />
          </FormGroup>
          <FormGroup className="form-group">
            <div id="test2" className="form-feedback">Enter Your Password Here</div>
            <Input
              required
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              value={loginDetails.password}
              onChange={(e) => handleChange(e, "password")}
              className="login-input"
            />
          </FormGroup>
          <Button
            type="button"
            className="submit-btn"
            onClick={handleFormSubmit}
          >
            Login
          </Button>
          <div className="signup-link-container">
            <span className="signup-link">
              <small>
                Don't have an account? <Link to="/signup" className="signup-link-text">Sign Up Here</Link>
              </small>
            </span>
          </div>
        </Form>
      </div>
    </Base>
  );
};

export default Login;
