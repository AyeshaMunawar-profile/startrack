import {
  ERROR_EMAIL_INVALID,
  EMPTY_PASSWORD,
  SHORT_PASSWORD,
  TEXT_EMPTY,
  AGE_NOT_ELIGIBLE,
  EMPTY_CONFIRM_PASSWORD,
  PASSWORD_MISMATCH,
  STRONG,
  MEDIUM,
  WEAK,
  WEAK_PASSWORD,
  MEDIUM_PASSWORD,
  strongRegex,
  mediumRegex,
  EMPTY_DATE_OF_BIRTH,
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

  if (!values.email) {
    errors.email = ERROR_EMAIL_INVALID;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = ERROR_EMAIL_INVALID;
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = EMPTY_DATE_OF_BIRTH;
  }
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

  if (!values.firstName) {
    errors.firstName = TEXT_EMPTY("First Name");
  }

  if (!values.lastName) {
    errors.lastName = TEXT_EMPTY("Last Name");
  }

  if (!values.dateOfBirth) {
    values.dateOfBirth = new Date();
    errors.dateOfBirth = AGE_NOT_ELIGIBLE;
  } else {
    const currentDate = new Date();
    if (currentDate.getFullYear() - values.dateOfBirth.getFullYear() < 18) {
      errors.dateOfBirth = AGE_NOT_ELIGIBLE;
    }
  }
  return { errors, passwordStrength };
}
