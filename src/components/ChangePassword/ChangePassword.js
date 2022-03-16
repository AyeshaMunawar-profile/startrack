import React, { useState } from "react";
import { Button, Form, FormGroup, Label, FormText } from "reactstrap";
import { displaySimpleAlert } from "../common/js/Alert/Alert";
import { MEDIUM, STRONG, WEAK } from "../common/js/Constants";
import useForms from "./useForms";
import validate, { getPasswordStrength } from "./FormValidationRules";

const ChangePassword = () => {
  const [passwordQuality, setPasswordQuality] = useState(null);

  const handlePasswordQualityChange = (quality) => {
    setPasswordQuality(quality);
  };

  const changePassword = (values) => {
    console.log("Password Change ", values);
    if (values.newPassword && values.confirmPassword) {
      if (values.newPassword === values.confirmPassword) {
        //write code
        // go to login page
        displaySimpleAlert(
          "Password changed",
          "Use new password for your account",
          "Proceed",
          "success"
        );
        console.log(values);
      } else {
        displaySimpleAlert(
          "Password Mismatch",
          "Make sure you enter the same password in both entries",
          "Try again",
          "error"
        );
      }
    }
  };
  const { handleChange, handleSubmit, values, errors } = useForms(
    changePassword,
    validate,
    getPasswordStrength,
    handlePasswordQualityChange
  );
  return (
    <>
      <div className="change-password-form center py-5 px-2 ">
        <Form
          className="text-off-white__0 fs-2 w-auto form form-transparent px-5 py-5 mb-5 shadow"
          onSubmit={handleSubmit}
        >
          <FormText>
            <h1 className="fs-1 text-yellow__0 mb-5 mt-3">Change Password</h1>
          </FormText>
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
          <Button
            className={
              "button-color-yellow__0 text-off-white__0 px-5 py-3 center fs-3 btn-sign-in"
            }
            value="sign-in"
            type={"submit"}
          >
            Change password
          </Button>
        </Form>
      </div>
    </>
  );
};
export default ChangePassword;
