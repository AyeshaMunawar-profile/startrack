import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './SignInForm.css';

const SignInForm = ({ onRouteChange }) => {
    return (
        <>
            <div className="sign-in-form center py-5 px-2 ">
                <Form className="text-off-white__0 fs-2 w-auto form form-transparent px-5 py-5 mb-5 shadow">
                    <FormText>
                        <h1 className="fs-1 text-yellow__0 mb-5 mt-3">Sign In</h1>
                    </FormText>
                    <FormGroup className={"column-right w-100 mt-3"}>
                        <Label for={"email"} className={"pe-5 fs-3"}>Email Address</Label>
                        <input className={"rounded-1 border-0 px-5 ps-3 fs-3 py-3 input "} name={"email"} type={"email"}
                            id={"sign-in-email"}
                            placeholder={"example@domain.com"} />
                    </FormGroup>
                    <FormGroup className={"column-right w-100"}>
                        <Label for={"password"} className={"pe-5 fs-3"}>Password</Label>
                        <input name={"password"} type={"password"} id={"sign-in-password"} placeholder={""}
                            className={"rounded-1 border-0 px-5 ps-3 fs-3 py-3 input"} />
                    </FormGroup>
                    <FormGroup check>
                        <Label check className={"fs-4"}>
                            <Input type="checkbox" className={"pl-0 mb-5 form-check-input"} />{' '}
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type={"submit"}
                        className={"button-color-yellow__0 text-off-white__0 px-5 py-3 center fs-3 btn-sign-in"}
                        onClick={() => onRouteChange("home")}
                        value="sign-in">
                        Sign-in
                    </Button>

                    <FormGroup className="mt-3">
                        <a className="sign-up-link link text-yellow__0 link-warning fs-4 pe-4" href="#" onClick={() => onRouteChange("sign-up")}>Sign up</a>
                        <span className="fs-4">
                            or
                        </span>
                        <a className="forgot-password-link link text-yellow__0 link-warning fs-4 ps-4" href="#">Forgot Password ?</a>
                    </FormGroup>

                </Form>
            </div>
        </>
    );
}

export default SignInForm;
