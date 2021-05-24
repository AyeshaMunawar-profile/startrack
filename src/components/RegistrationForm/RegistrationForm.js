import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './RegistrationForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegistrationForm = () => {
    const [dateOfBirth, setdateOfBirth] = useState(new Date());
    return (
        <>
            <div className="sign-up-form center py-3 px-2 ">
                <Form className="text-off-white__0 fs-2 form form-transparent px-5 py-5 ">

                    <FormText>
                        <h1 className="fs-1 text-yellow__0 mb-5">Registration Form</h1>
                    </FormText>

                    <FormGroup className={"column-right"}>
                        <Label for={"email"} className={"pe-5 fs-3"}>Email Address</Label>
                        <input className={"rounded-1 border-0 ps-2 px-5 fs-3 py-2 input input-email w-100"} name={"email"} type={"email"}
                            id={"sign-up-email"}
                            placeholder={"example@domain.com"} />
                    </FormGroup>

                    <FormGroup className={"column-right"}>
                        <Label for={"date-of-birth"} className={"pe-5 fs-3"}>Date Of Birth</Label>
                        <DatePicker
                            className="input input-date-of-birth rounded-1 border-0 ps-2 px-5 fs-3 py-2 w-100"
                            selected={dateOfBirth}
                            onChange={date => setdateOfBirth(date)}
                        />
                    </FormGroup>

                    <FormGroup className={"column-right"}>
                        <Label for={"password"} className={"pe-5 fs-3"}>Password</Label>
                        <input name={"password"} type={"password"} id={"sign-up-password"} placeholder={""}
                            className={"rounded-1 border-0 ps-2 px-5 fs-3 py-2 input input-password w-100"} />
                    </FormGroup>

                    <FormGroup className={"column-right"}>
                        <Label for={"confirm-password"} className={"pe-5 fs-3"}>Confirm Password</Label>
                        <input name={"confirm-password"} type={"confirm-password"} id={"sign-up-confirm-password"} placeholder={""}
                            className={"rounded-1 border-0  ps-2 px-5 fs-3 py-2 input input-confirm-password w-100"} />
                    </FormGroup>

                    <FormGroup check>
                        <Label check className={"fs-4"}>
                            <Input className="input-remember-me" type="checkbox" className={"pl-0 mb-5 form-check-input"} />{' '}
                            I accept the
                            <a className="link link-color-yellow__-1 ps-3 pe-3">Terms of use</a>
                            &
                            <a className="link link-color-yellow__-1 ps-3 pe-3">Privacy Policy</a>
                        </Label>
                    </FormGroup>

                    <Button type={"submit"}
                        className={"button-color-yellow__0 text-off-white__0 px-5 py-3 center fs-3 btn-sign-up"}>Sign-up</Button>
                </Form>
            </div>
        </>
    );
}

export default RegistrationForm;
