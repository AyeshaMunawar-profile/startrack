import { useState, useEffect } from 'react';
import { DEFAULT_EVENT, SIMPLE_EVENT } from '../common/js/Constants';

const useForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(undefined);

    // call the form specific function on clicking the submit button like login register etc. only
    // if the error list is empty after running the validate function 
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);

    // when submit button clicked run the custom validation function which returns 
    // errors list if found and te strength of password if it exists 
    const handleSubmit = (event) => {
        if (event && event.preventDefault) event.preventDefault();
        const validationResult = validate(values);
        if (validationResult.errors && validationResult.errors) {
            setErrors(validationResult.errors);
        }
        if (validationResult && validationResult.passwordStrength) {
            setPasswordStrength(validationResult.passwordStrength);
        }
        setIsSubmitting(true);
    };

    const handleChange = (event, valueType = DEFAULT_EVENT) => {
        if (event && event.persist) {
            event.persist();
        }
        if (valueType === SIMPLE_EVENT) { // for date as we are using a custom component the event has the value of date 
            setValues(values => ({ ...values, "dateOfBirth": event }));
        } else {
            setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        }
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        passwordStrength
    }
};

export default useForm;