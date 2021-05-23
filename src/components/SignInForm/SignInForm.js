import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './SignInForm.css';

const SignInForm = () => {
    return (
        <>
            <div className="sign-in-form center py-3 px-2 ">
                <Form className="text-off-white__0 fs-2 w-auto form form-transparent px-5 py-5 mb-5">
                    <FormText>
                        <h1 className="fs-1 text-yellow__0 mb-5">Login</h1>
                    </FormText>
                    <FormGroup className={"column-right w-100"}>
                        <Label for={"email"} className={"pe-5"}>Email Address</Label>
                        <input className={"rounded-1 border-0 px-5 ps-2 fs-3 py-2 input "} name={"email"} type={"email"}
                            id={"sign-in-email"}
                            placeholder={"example@domain.com"} />
                    </FormGroup>
                    <FormGroup className={"column-right w-100"}>
                        <Label for={"password"} className={"pe-5"}>Password</Label>
                        <input name={"password"} type={"password"} id={"sign-in-password"} placeholder={""}
                            className={"rounded-1 border-0 px-5 ps-2 fs-3 py-2 input"} />
                    </FormGroup>
                    <FormGroup check>
                        <Label check className={"fs-4"}>
                            <Input type="checkbox" className={"pl-0 mb-5 form-check-input"} />{' '}
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type={"submit"}
                        className={"button-color-yellow__0 text-off-white__0 px-5 py-3 center fs-3 btn-sign-in"}>Sign-in</Button>
                </Form>
            </div>
        </>
    );
}

export default SignInForm;
