import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./RegistrationForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useForms from "./useForms";
import validate, { getPasswordStrength } from "./FormValidationRules";
import { Link, useNavigate} from "react-router-dom";

import {MEDIUM, STRONG, WEAK, SIMPLE_EVENT, HOME_ROUTE} from "../common/js/Constants";
import axios from "axios";
import {SIGN_UP_ENDPOINT} from "../../config";
import {displaySimpleAlert} from "../common/js/Alert/Alert";

const RegistrationForm = () => {
  const [passwordQuality, setPasswordQuality] = useState(null);
  const navigate = useNavigate();
  const registerUser = (values) => {
    console.log(
      "Form Submitted successfully no errors the values submitted are :"
    );

    console.log(values);
    axios.post(SIGN_UP_ENDPOINT, {
      dateOfBirth:values.dateOfBirth,
      email:values.email,
      firstName:values.firstName,
      lastName:values.lastName,
      password:values.password,
    }).then((response)=>{
      if(response.status === 200){
        displaySimpleAlert("Welcome !", "Account created successfully", "Proceed", "success");
        navigate(HOME_ROUTE, {replace: true})
      }
    }).catch(error=>{
      displaySimpleAlert("Oops !", "Sign up failed", "Try again", "error")
      console.log(error);
    })
  };

  const handlePasswordQualityChange = (quality) => {
    setPasswordQuality(quality);
  };

  const { handleChange, handleSubmit, values, errors } = useForms(
    registerUser,
    validate,
    getPasswordStrength,
    handlePasswordQualityChange
  );

  return (
    <>
      <div className="sign-up-form center py-5 px-2 w-100">
        <Form
          className="text-off-white__0 fs-2 form form-transparent px-5 py-5 shadow sign-up-form-contents"
          onSubmit={handleSubmit}
        >
          <FormText>
            <h1 className="fs-1 text-yellow__0 mb-5 mt-4">Sign Up</h1>
          </FormText>

          <FormGroup className={"mt-5 row-space-between"}>
            <FormGroup className="w-50">
              <Label htmlFor={"firstName"} className={"pe-5 fs-3"}>
                First Name
              </Label>
              <input
                className={
                  "rounded-1 border-0 ps-3 px-5 fs-3 py-3 input input-first-name w-100"
                }
                name={"firstName"}
                type={"text"}
                id={"sign-up-first-name"}
                placeholder={"John"}
                onChange={handleChange}
                value={values.firstName || ""}
                required
                autoComplete="on"
              />
              {errors.firstName && (
                <p className="help is-danger fs-4">{errors.firstName}</p>
              )}
            </FormGroup>

            <FormGroup className="w-50 ms-5">
              <Label htmlFor={"lastName"} className={"pe-5 fs-3"}>
                Last Name
              </Label>
              <input
                className={
                  "rounded-1 border-0 ps-3 px-5 fs-3 py-3 input input-last-name w-100"
                }
                name={"lastName"}
                type={"text"}
                id={"sign-up-last-name"}
                placeholder={"Snow"}
                onChange={handleChange}
                value={values.lastName || ""}
                required
                autoComplete="on"
              />
              {errors.lastName && (
                <p className="help is-danger fs-4">{errors.lastName}</p>
              )}
            </FormGroup>
          </FormGroup>

          <FormGroup className={"column-right"}>
            <Label htmlFor={"email"} className={"pe-5 fs-3"}>
              Email Address
            </Label>
            <input
              className={
                "rounded-1 border-0 ps-3 px-5 fs-3 py-3 input input-email w-100"
              }
              name={"email"}
              type={"email"}
              id={"sign-up-email"}
              placeholder={"example@domain.com"}
              onChange={handleChange}
              value={values.email || ""}
              required
              autoComplete="off"
            />
            {errors.email && (
              <p className="help is-danger fs-4">{errors.email}</p>
            )}
          </FormGroup>

          <FormGroup className={"column-right"}>
            <Label htmlFor={"dateOfBirth"} className={"pe-5 fs-3"}>
              Date Of Birth
            </Label>
            <DatePicker
              className="input input-date-of-birth rounded-1 border-0 ps-3 px-5 fs-3 py-3 w-100"
              selected={values.dateOfBirth || new Date()}
              onChange={(event) =>
                handleChange(event, SIMPLE_EVENT, "dateOfBirth")
              }
              value={values.dateOfBirth || new Date()}
              name={"dateOfBirth"}
              required
            />
            {errors.dateOfBirth && (
              <p className="help is-danger fs-4">{errors.dateOfBirth}</p>
            )}
          </FormGroup>

          <FormGroup className={"column-right"}>
            <Label htmlFor={"password"} className={"pe-5 fs-3"}>
              Password
            </Label>
            <input
              name={"password"}
              type={"password"}
              id={"sign-up-password"}
              placeholder={""}
              className={
                "rounded-1 border-0 ps-3 px-5 fs-3 py-3 input input-password w-100"
              }
              onChange={handleChange}
              value={values.password || ""}
              required
              autoComplete="off"
            />
            <span
              className={"p-1 border-0 w-100 rounded-1"}
              style={
                passwordQuality === STRONG
                  ? { backgroundColor: "green" }
                  : passwordQuality === MEDIUM
                    ? { backgroundColor: "orange" }
                    : passwordQuality === WEAK
                      ? { backgroundColor: "red" }
                      : { display: "none" }
              }
            />
            {errors.password && (
              <p className="help is-danger fs-4">{errors.password}</p>
            )}
          </FormGroup>

          <FormGroup className={"column-right"}>
            <Label htmlFor={"confirmPassword"} className={"pe-5 fs-3"}>
              Confirm Password
            </Label>
            <input
              name={"confirmPassword"}
              type={"password"}
              id={"sign-up-confirm-password"}
              placeholder={""}
              className={
                "rounded-1 border-0  ps-3 px-5 fs-3 py-3 input input-confirm-password w-100"
              }
              onChange={handleChange}
              value={values.confirmPassword || ""}
              required
              autoComplete="off"
            />
            {errors.confirmPassword && (
              <p className="help is-danger fs-4">{errors.confirmPassword}</p>
            )}
          </FormGroup>

          <FormGroup check>
            <Label check className={"fs-4"}>
              <Input
                type="checkbox"
                className={"pl-0 mb-5 form-check-input input-remember-me"}
                required
              />{" "}
              I accept the
              <div className="link link-color-yellow__-1 ps-3 pe-3" href="#">
                <Link to={""}>Terms of use</Link>
              </div>
              &
              <div className="link link-color-yellow__-1 ps-3 pe-3">
                <Link to={""}>Privacy Policy</Link>
              </div>
            </Label>
          </FormGroup>

          <Button
            className={
              "button-color-yellow__0 text-off-white__0 px-5 py-3 center fs-3 btn-sign-up"
            }
            type={"submit"}
            value={"home"}
          >
            Sign-up
          </Button>
        </Form>
      </div>
    </>
  );
};

export default RegistrationForm;
