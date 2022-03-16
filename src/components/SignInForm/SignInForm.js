import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./SignInForm.css";
import { SIGN_IN_ENDPOINT } from "../../config";
import { SIGN_UP_ROUTE, CHANGE_PASSWORD_ROUTE } from "../common/js/Constants";
import { Link, useNavigate } from "react-router-dom";
import { displaySimpleAlert } from "../common/js/Alert/Alert";

const SignInForm = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const navigate = useNavigate();
  // const navigate = function (){
  //   console.log("Navigate to teh new page ")
  // };
  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    if (signInEmail && signInPassword) {
      // const requestOptions = {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: signInEmail,
      //     password: signInPassword,
      //   }),
      // };
      axios
        .post(SIGN_IN_ENDPOINT, {
          email: signInEmail,
          password: signInPassword,
        })
        .then((data) => {
          if (data.status === 200) {
            displaySimpleAlert(
              "Welcome !",
              "Login successful",
              "Proceed",
              "success"
            );
            navigate("/home")
          }
        })
        .catch((error) => {
          displaySimpleAlert("Oops !", "Login Failed", "Try Again", "error");
          console.log(error);
        });
    }
  };
  // const changeRoute = (route) => {
  //   navigate(route);
  // };
  return (
    <>
      <div className="sign-in-form center py-5 px-2 ">
        <Form className="text-off-white__0 fs-2 w-auto form form-transparent px-5 py-5 mb-5 shadow">
          <FormText>
            <h1 className="fs-1 text-yellow__0 mb-5 mt-3">Sign In</h1>
          </FormText>
          <FormGroup className={"column-right w-100 mt-3"}>
            <Label htmlFor={"email"} className={"pe-5 fs-3"}>
              Email Address
            </Label>
            <input
              className={"rounded-1 border-0 px-5 ps-3 fs-3 py-3 input "}
              name={"email"}
              type={"email"}
              id={"sign-in-email"}
              placeholder={"example@domain.com"}
              autoComplete="on"
              onChange={onEmailChange}
              required
            />
          </FormGroup>
          <FormGroup className={"column-right w-100"}>
            <Label htmlFor={"password"} className={"pe-5 fs-3"}>
              Password
            </Label>
            <input
              name={"password"}
              type={"password"}
              id={"sign-in-password"}
              placeholder={""}
              className={"rounded-1 border-0 px-5 ps-3 fs-3 py-3 input"}
              autoComplete="off"
              onChange={onPasswordChange}
              required
            />
          </FormGroup>
          <FormGroup check>
            <Label check className={"fs-4"}>
              <Input type="checkbox" className={"pl-0 mb-5 form-check-input"} />{" "}
              Remember me
            </Label>
          </FormGroup>
          <Button
            className={
              "button-color-yellow__0 text-off-white__0 px-5 py-3 center fs-3 btn-sign-in"
            }
            onClick={onSubmitSignIn}
            value="sign-in"
          >
            Sign-in
          </Button>

          <FormGroup className="mt-3">
            <div className="forgot-password-link link text-yellow__0 link-warning fs-4 pe-4 d-inline">
              <Link to={"/" + SIGN_UP_ROUTE}>Sign up</Link>
            </div>
            <span className="fs-4">or</span>
            <div className="forgot-password-link link text-yellow__0 link-warning fs-4 ps-4 d-inline">
              <Link to={"/" + CHANGE_PASSWORD_ROUTE}>Forgot Password ?</Link>
            </div>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};
export default SignInForm;
