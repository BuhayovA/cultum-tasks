//hook(s)
import React, { useEffect, useState } from 'react';
//type
import { validationsType } from '@md-shared/types/validations';

export const useValidations = (value: string, validations: validationsType) => {
  //local states
  const [isEmpty, setEmpty] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [capitalError, setCapitalError] = useState(false);
  const [symbolError, setSymbolError] = useState(false);
  const [inputValid, setInputValid] = useState(true);


  //Effect(s)
  useEffect(() => {
    //make іterates over an object validations
    for (const validation in validations) {
      // checks the keys of the elements of an object
      switch (validation) {
        //If your input needed min length value
        case 'minLength':
          // @ts-ignore
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
            break;

        //If your input needed max length value
        case 'maxLength':
          // @ts-ignore
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
          break;

        //If your input needed capital value
        case 'isCapital':
          if (validations[validation]) {
            value.split('').some((e) => ('A' <= e && e <= 'Z') || ('А' <= e && e <= 'Я'))
              ? setCapitalError(false)
              : setCapitalError(true);
            break;
          } else {
            break;
          }

        //If your input needed symbol value
        case 'isSymbol':
          if (validations[validation]) {
            value.split('').some((e) => /[-!$%^&*()_+|~=`{}[\]:";'<>?,./]/.test(e))
              ? setSymbolError(false)
              : setSymbolError(true);
            break;
          } else {
            break;
          }

        // If your input need phone type
        case 'isPhone':
          // eslint-disable-next-line no-case-declarations
          if (validations[validation]) {
            const phoneRegular = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
            phoneRegular.test(String(value)) ? setPhoneError(false) : setPhoneError(true);
            break;
          } else {
            break;
          }

        //If your input need email type
        case 'isEmail':
          // eslint-disable-next-line no-case-declarations
          if (validations[validation]) {
            const emailRegular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            emailRegular.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
            continue;
          } else {
            break;
          }
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || symbolError || capitalError || emailError || phoneError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, symbolError, capitalError, maxLengthError, emailError, phoneError]);

  const checkIsEmpty = () => {
      value ? setEmpty(false) : setEmpty(true);
  };

  return {
    isEmpty,
    setEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    phoneError,
    capitalError,
    symbolError,
    inputValid,
    checkIsEmpty
  };
};

export const useInput = (initialValue: string, validations: validationsType) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidations(value, validations);
  let error;
  if(valid.isEmpty) {
    error = `This item cannot be empty.`
  }
  if(valid.minLengthError && isDirty){
    error = `The minimum length is ${validations.minLength} letters`
  }
  if(valid.maxLengthError && isDirty){
    error = `The maximum length is ${validations.maxLength} letters.`
  }
  if(valid.emailError && isDirty){
    error = `Email address must contain "@"!`
  }
  if(valid.phoneError && isDirty){
    error = `Invalid phone shape.This item can only contain numbers.`
  }
  if(valid.capitalError && isDirty){
    error = `The password must contain at least one uppercase letter.`
  }
  if(valid.symbolError && isDirty){
    error = `The password must contain at least one symbol.`
  }


  //func if input value changes
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  //func if input on blur
  const onBlur = (): void => {
    setDirty(true);
  };

  //func if input on focus
  const onFocus = (empty: boolean): void => {
    valid.setEmpty(empty)
  }

  return {
    value,
    error,
    onFocus,
    onChange,
    onBlur,
    isDirty,
    ...valid
  };
};
