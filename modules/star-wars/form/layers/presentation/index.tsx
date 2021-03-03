import React, { useContext } from 'react';
//views
import { Button, BWrapper, Wrapper } from './views';
import { FormBLContext } from '@md-star-wars/form/layers/businnes';
import FormInput from '../../components/input-form/index';

const FormPresentation = () => {
  const { firstName, lastName, email, onSubmit, password, phone } = useContext(FormBLContext);

  return (
    <Wrapper>
      <form>
        <FormInput inputMethods={firstName} placeholder='First name *' inputType='text' />
        <FormInput inputMethods={lastName} placeholder='Last name *' inputType='text' />
        <FormInput inputMethods={email} placeholder='Email *' inputType='email' />
        <FormInput inputMethods={phone} placeholder='Phone *' inputType='phone' />
        <FormInput inputMethods={password} placeholder='Password *' inputType='password' />

        <BWrapper>
          <Button onClick={(event) => onSubmit(event)} type='submit'>
            Submit
          </Button>
        </BWrapper>
      </form>
    </Wrapper>
  );
};

export default FormPresentation;
