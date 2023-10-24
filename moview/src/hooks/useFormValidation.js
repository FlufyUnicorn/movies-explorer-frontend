import React from "react";
import isEmail from 'validator/es/lib/isEmail';

export default function useFormValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const input = evt.target;

    if (input.name === 'name' && input.validity.patternMismatch) {
      input.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис.')
    } else {
      input.setCustomValidity('');
    }

    if (input.name === 'email') {
      if (!isEmail(input.value)) {
        input.setCustomValidity('Некорректый адрес почты.');
      } else {
        input.setCustomValidity('');
      }
    }

    setValues({ ...values, [input.name]: input.value });
    setErrors({ ...errors, [input.name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  };
  const updateForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, updateForm, setIsValid };
}