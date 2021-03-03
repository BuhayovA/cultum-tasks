import React from 'react';

//What the hook takes.
export interface validationsType {
  isPhone?: boolean;
  isEmpty?: boolean;
  isCapital?: boolean;
  isSymbol?: boolean;
  isEmail?: boolean;
  maxLength?: number;
  minLength?: number;
}

//What the hook returns.
export interface validationsReturn {
  value: string;
  error: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus:(empty: boolean) => void;
  onBlur: () => void;
  isDirty: boolean;
  isEmpty: boolean;
  setEmpty: (empty: boolean) => void;
  minLengthError: boolean;
  maxLengthError: boolean;
  emailError: boolean;
  phoneError: boolean;
  capitalError: boolean;
  symbolError: boolean;
  inputValid: boolean;
  checkIsEmpty: () => void;
}
