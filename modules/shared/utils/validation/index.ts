import React, { useEffect, useState } from 'react';

export const useValidations = (value: string, validations: any) => {
  const [isEmpty,setEmpty] = useState(true);
  const [minLengthError,setMinLengthError] = useState(true);
  const [maxLengthError,setMaxLengthError] = useState(true);
  const [emailError,setEmailError] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation){

        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;

        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break;

        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break;
        case 'isEmail':
          // eslint-disable-next-line no-case-declarations
          const regular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          regular.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
      }
    }
  },[value])
  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
  }
}


export const useInput = (initialValue: string, validations: any) => {
  const [value,setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidations(value, validations)


  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  const onBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    setDirty(true)
  }

  return{
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}