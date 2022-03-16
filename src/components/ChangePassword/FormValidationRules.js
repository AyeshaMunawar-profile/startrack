import {
  EMPTY_PASSWORD,
  SHORT_PASSWORD,
  EMPTY_CONFIRM_PASSWORD,
  PASSWORD_MISMATCH,
  STRONG,
  MEDIUM,
  WEAK,
  WEAK_PASSWORD,
  MEDIUM_PASSWORD,
  strongRegex,
  mediumRegex,
} from "../common/js/Constants";

export function getPasswordStrength(password) {
  if (password && password.length > 0) {
    if (strongRegex.test(password)) {
      return STRONG;
    } else if (mediumRegex.test(password)) {
      return MEDIUM;
    } else {
      return WEAK;
    }
  } else {
    return null;
  }
}

export default function validate(values) {
  let errors = {};
  let passwordStrength = undefined;

  if (!values.password) {
    errors.password = EMPTY_PASSWORD;
  } else if (values.password.length < 8) {
    errors.password = SHORT_PASSWORD;
  } else {
    // if all the conditions fulfilled i.e password entered and > 8 character
    // then check for the password strength
    if (strongRegex.test(values.password)) {
      passwordStrength = STRONG;
    } else if (mediumRegex.test(values.password)) {
      passwordStrength = MEDIUM;
      errors.password = MEDIUM_PASSWORD;
    } else {
      passwordStrength = WEAK;
      errors.password = WEAK_PASSWORD;
    }
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = EMPTY_CONFIRM_PASSWORD;
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = PASSWORD_MISMATCH;
  }

  return { errors, passwordStrength };
}
