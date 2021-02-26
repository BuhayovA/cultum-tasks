//views
import { MainLayout } from '@md-shared/layouts/main';
import { Wrapper, Input, EWrapper, Button, BWrapper, IWrapper } from './views';
//utils
import { useInput } from '@md-utils/validation';

const FormPage = () => {
  const firstName = useInput('', { minLength: 5, maxLength: 50 });
  const lastName = useInput('', { minLength: 5, maxLength: 50 });
  const email = useInput('', { isEmail: true });
  const phone = useInput('', { minLength: 10, isPhone: true });
  const password = useInput('', { isCapital: true, isSymbol: true });

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
      console.log(form);
    } else {
      console.error(`invalid`);
    }
  };

  return (
    <MainLayout>
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
            {phone.isDirty && phone.phoneError ? <EWrapper>Invalid phone shape.This item can only contain numbers.</EWrapper> : <div></div>}
            {phone.isDirty && phone.minLengthError ? (
              <EWrapper>The minimum length is 10 letters.</EWrapper>
            ) : (
              <div></div>
            )}
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
    </MainLayout>
  );
};

export default FormPage;
