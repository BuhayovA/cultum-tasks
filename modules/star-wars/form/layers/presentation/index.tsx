import React, { useContext } from 'react';
//views
import { Button, BWrapper, EWrapper, Input, IWrapper, Wrapper } from './views';
import { FormBLContext } from '@md-star-wars/form/layers/businnes';

const FormPresentation = () => {
  const { firstName, lastName, email, onSubmit, password, phone } = useContext(FormBLContext);
  return (
    <Wrapper>
      <form>
        <IWrapper>
          <Input
            onChange={(event) => firstName.onChange(event)}
            onBlur={() => firstName.onBlur()}
            value={firstName.value}
            placeholder='First name'
            type='tel'
            name='firstName'
          />
          {firstName.isEmpty ? <EWrapper>This item cannot be empty.</EWrapper> : <div></div>}
          {firstName.isDirty && firstName.minLengthError ? (
            <EWrapper>The minimum length is 5 letters.</EWrapper>
          ) : (
            <div></div>
          )}
          {firstName.isDirty && firstName.maxLengthError ? (
            <EWrapper>The maximum length is 50 letters.</EWrapper>
          ) : (
            <div></div>
          )}
        </IWrapper>
        <IWrapper>
          <Input
            value={lastName.value}
            onChange={(event) => lastName.onChange(event)}
            onBlur={() => lastName.onBlur()}
            placeholder='Last name'
            type='text'
            name='lastName'
          />
          {lastName.isEmpty ? <EWrapper>This item cannot be empty.</EWrapper> : <div></div>}
          {lastName.isDirty && lastName.minLengthError ? (
            <EWrapper>The minimum length is 5 letters.</EWrapper>
          ) : (
            <div></div>
          )}
          {lastName.isDirty && lastName.maxLengthError ? (
            <EWrapper>The maximum length is 50 letters.</EWrapper>
          ) : (
            <div></div>
          )}
        </IWrapper>
        <IWrapper>
          <Input
            onBlur={() => email.onBlur()}
            value={email.value}
            onChange={(event) => email.onChange(event)}
            placeholder='Email'
            type='email'
            name='email'
          />
          {email.isEmpty ? <EWrapper>This item cannot be empty.</EWrapper> : <div></div>}
          {email.isDirty && email.emailError ? <EWrapper>Email address must contain "@"!</EWrapper> : <div></div>}
        </IWrapper>
        <IWrapper>
          <Input
            onBlur={() => phone.onBlur()}
            value={phone.value}
            onChange={(event) => phone.onChange(event)}
            placeholder='Phone'
            type='phone'
            name='phone'
          />
          {phone.isEmpty ? <EWrapper>This item cannot be empty.</EWrapper> : <div></div>}
          {phone.isDirty && phone.phoneError ? (
            <EWrapper>Invalid phone shape.This item can only contain numbers.</EWrapper>
          ) : (
            <div></div>
          )}
          {phone.isDirty && phone.minLengthError ? <EWrapper>The minimum length is 10 letters.</EWrapper> : <div></div>}
        </IWrapper>
        <IWrapper>
          <Input
            value={password.value}
            onChange={(event) => password.onChange(event)}
            onBlur={() => password.onBlur()}
            placeholder='Password'
            type='password'
            name='password'
          />
          {password.isEmpty ? <EWrapper>This item cannot be empty.</EWrapper> : <div></div>}
          {password.isDirty && password.symbolError ? (
            <EWrapper>The password must contain at least one character.</EWrapper>
          ) : (
            <div></div>
          )}
          {password.isDirty && password.capitalError ? (
            <EWrapper>The password must contain at least one uppercase letter.</EWrapper>
          ) : (
            <div></div>
          )}
        </IWrapper>

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
