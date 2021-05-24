import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './RegistrationForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegistrationForm = () => {
    const [dateOfBirth, setdateOfBirth] = useState(new Date());
    return (
        <>
            <div className="sign-up-form center py-5 px-2 w-100">
                <Form className="text-off-white__0 fs-2 form form-transparent px-5 py-5 shadow sign-up-form-contents">

                    <FormText>
                        <h1 className="fs-1 text-yellow__0 mb-5 mt-4">Registration Form</h1>
                    </FormText>

                    <FormGroup className={"mt-5 row-space-between"}>
                        <FormGroup className="w-50">
                            <Label for={"first-name"} className={"pe-5 fs-3"}>First Name</Label>
                            <input className={"rounded-1 border-0 ps-3 px-5 fs-3 py-3 input input-first-name w-100"} name={"first-name"} type={"text"}
                                id={"sign-up-first-name"}
                                placeholder={"John"} />
                        </FormGroup>
                        <FormGroup className="w-50 ms-5">
                            <Label for={"last-name"} className={"pe-5 fs-3"}>Last Name</Label>
                            <input className={"rounded-1 border-0 ps-3 px-5 fs-3 py-3 input input-last-name w-100"} name={"last-name"} type={"text"}
                                id={"sign-up-last-name"}
                                placeholder={"Snow"} />
                        </FormGroup>
                    </FormGroup>

                    <FormGroup className={"column-right"}>
                        <Label for={"email"} className={"pe-5 fs-3"}>Email Address</Label>
                        <input className={"rounded-1 border-0 ps-3 px-5 fs-3 py-3 input input-email w-100"} name={"email"} type={"email"}
                            id={"sign-up-email"}
                            placeholder={"example@domain.com"} />
                    </FormGroup>

                    <FormGroup className={"column-right"}>
                        <Label for={"date-of-birth"} className={"pe-5 fs-3"}>Date Of Birth</Label>
                        <DatePicker
                            className="input input-date-of-birth rounded-1 border-0 ps-3 px-5 fs-3 py-3 w-100"
                            selected={dateOfBirth}
                            onChange={date => setdateOfBirth(date)}
                        />
                    </FormGroup>

                    <FormGroup className={"column-right"}>
                        <Label for={"password"} className={"pe-5 fs-3"}>Password</Label>
                        <input name={"password"} type={"password"} id={"sign-up-password"} placeholder={""}
                            className={"rounded-1 border-0 ps-3 px-5 fs-3 py-3 input input-password w-100"} />
                    </FormGroup>

                    <FormGroup className={"column-right"}>
                        <Label for={"confirm-password"} className={"pe-5 fs-3"}>Confirm Password</Label>
                        <input name={"confirm-password"} type={"password"} id={"sign-up-confirm-password"} placeholder={""}
                            className={"rounded-1 border-0  ps-3 px-5 fs-3 py-3 input input-confirm-password w-100"} />
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
