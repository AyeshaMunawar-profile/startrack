// Password Strengths
export const STRONG = "STRONG";
export const MEDIUM = "MEDIUM";
export const WEAK = "WEAK";

// Default event is the default event object its value is accessed using event.target.value
// Simple event is the tyep of event with value directly stored into it i.e
// to get the value of such event you use event not event.target.value
export const DEFAULT_EVENT = "DEFAULT_EVENT";
export const SIMPLE_EVENT = "SIMPLE_EVENT";

// Error Messages
export const ERROR_EMAIL_INVALID = "Email address is invalid";
export const EMPTY_PASSWORD = "Password is required";
export const SHORT_PASSWORD = "Password must be 8 or more characters";
export const EMPTY_CONFIRM_PASSWORD = "Please confirm your password";
export const PASSWORD_MISMATCH = "Both passwords don't match";
export const AGE_NOT_ELIGIBLE = "Users with age > 18 years eligible only !";
export const MEDIUM_PASSWORD =
  "Weak Password! Add special characters , numbers and capital letters ";
export const WEAK_PASSWORD =
  "Weak Password! Add special characters , numbers and capital letters ";
export const EMPTY_DATE_OF_BIRTH = "Date of birth is required";
export const TEXT_EMPTY = (value) => {
  return "Please enter " + value;
};

// REGEX Expressions
export const strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
export const mediumRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);
