import React from 'react';
//utils
import { useInput } from '@md-utils/validation';
//types
import { validationsReturn } from '@md-shared/types/validations';

interface Context {
  firstName: validationsReturn;
  lastName: validationsReturn;
  email: validationsReturn;
  phone: validationsReturn;
  password: validationsReturn;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const FormBLContext = React.createContext<Context>({} as Context);

const FormBLContextProvider: React.FC = ({ children }) => {
  //create all inputs type
  const firstName = useInput('', { minLength: 5, maxLength: 50 });
  const lastName = useInput('', { minLength: 5, maxLength: 50 });
  const email = useInput('', { isEmail: true });
  const phone = useInput('', { minLength: 10, isPhone: true });
  const password = useInput('', { isCapital: true, isSymbol: true });

  //func will be call button onclick on Submit
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    //check empty inputs
    firstName.checkIsEmpty();
    lastName.checkIsEmpty();
    email.checkIsEmpty();
    phone.checkIsEmpty();
    password.checkIsEmpty();

    //check valid input value
    if (firstName.inputValid && lastName.inputValid && email.inputValid && phone.inputValid && password.inputValid) {
      const form = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        password: password.value
      };
      // eslint-disable-next-line no-console
      console.log(form);
    } else {
      console.error(`invalid`);
    }
  };

  return (
    <FormBLContext.Provider
      value={{
        firstName,
        lastName,
        email,
        phone,
        password,
        onSubmit
      }}
    >
      {children}
    </FormBLContext.Provider>
  );
};

export default FormBLContextProvider;
