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
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;

        //If your input needed max length value
        case 'maxLength':
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

        /*TODO*/
        // case 'isEmpty':
        //   if (validations[validation]) {
        //     value ? setEmpty(false) : setEmpty(true);
        //     break;
        //   } else {
        //     break;
        //   }

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

export const useInput = (initialValue: string, validations: any) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidations(value, validations);

  //func if input value changes
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    valid.checkIsEmpty();
  };

  //func if input on blur
  const onBlur = (): void => {
    setDirty(true);
    valid.checkIsEmpty();
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  };
};
