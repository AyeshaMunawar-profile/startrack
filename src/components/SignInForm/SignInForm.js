import React from "react";
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

const SignInForm = () => {
    return (
        <>
            <div className="sign-in-form center py-3 px-2">
                <Form className="text-off-white__0 fs-2 w-75">
                    <FormGroup>
                        <Label for={"email"} className={"pe-5"}>Email Address</Label>
                        <input className={"rounded-2 border-0 px-3 fs-3"} name={"email"} type={"email"} id={"email"}
                               placeholder={"example@domain.com"}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for={"password"}>Password</Label>
                        <input name={"password"} type={"password"} id={"password"} placeholder={""}/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check className={"fs-4"}>
                            <Input type="checkbox" className={"pl-0"}/>{' '}
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type={"submit"}
                            className={"button-color-red__0 text-off-white__0 px-4 py-3 center"}>Sign-in</Button>
                </Form>
            </div>
        </>
    );
}

export default SignInForm;
