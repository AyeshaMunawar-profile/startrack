import { useState, useEffect } from "react";
import { DEFAULT_EVENT, SIMPLE_EVENT } from "../common/js/Constants";

const useForm = (
  callback,
  validate,
  getPasswordStrength,
  handlePasswordQualityChange
) => {
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
  }, [errors, isSubmitting]);

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

  const handleChange = (event, eventType = DEFAULT_EVENT, inputName = null) => {
    if (event && event.persist) {
      event.persist();
    }
    // simple event means the value of event is the value entered in the form
    // so it's value will be accessed using event not event.target.value
    if (eventType === SIMPLE_EVENT && inputName) {
      setValues((values) => ({ ...values, [inputName]: event }));
    } else {
      // if the input is password set password strength on its change
      if (event.target.name === "password") {
        handlePasswordQualityChange(getPasswordStrength(event.target.value));
      }
      setValues((values) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    passwordStrength,
  };
};

export default useForm;
