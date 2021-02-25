import { MainLayout } from '@md-shared/layouts/main';
import { Wrapper, Input, EWrapper } from './views';
import { useInput } from '@md-utils/validation';



const FormPage = () => {

  const email = useInput('', {isEmpty: true, minLength: 5})
  const password = useInput('', {isEmpty: true, minLength: 5})

  return (
    <MainLayout>
      <Wrapper>
        <form>
          <div>
            <Input placeholder='First name' type='text' name='firstName'/>
          </div>
            <Input placeholder='Last name' type='text' name='lastName'/>
          <div>
            <Input onBlur={event => email.onBlur(event)} value={email.value} onChange={(event => email.onChange(event))} placeholder='Email' type='email' name='email'/>
          </div>
          <div>
            <Input onBlur={event => password.onBlur(event)} value={password.value} onChange={(event => password.onChange(event))} placeholder='Phone' type='phone' name='phone'/>
          </div>
          <div>
            <Input placeholder='password' type='password' name='password'/>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </Wrapper>
    </MainLayout>
  );
};

export default FormPage;