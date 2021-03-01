//type
import { validationsReturn } from '@md-shared/types/validations';
//views
import { IWrapper,Input,EWrapper } from './views';

interface Props {
  inputMethods: validationsReturn,
  placeholder: string,
  inputType: string,
}

const FormInput: React.FC<Props> = ({ inputMethods, placeholder, inputType}) => {
  let error;

  //error checking
    if(inputMethods.isEmpty) {
      error = <EWrapper>This item cannot be empty.</EWrapper>
    }
    if(inputMethods.minLengthError && inputMethods.isDirty){
      error = <EWrapper>The minimum length is {inputMethods.maxMinValidationValue.minLength} letters.</EWrapper>
    }
    if(inputMethods.maxLengthError && inputMethods.isDirty){
      error = <EWrapper>The maximum length is {inputMethods.maxMinValidationValue.maxLength} letters.</EWrapper>
    }
    if(inputMethods.emailError && inputMethods.isDirty){
      error = <EWrapper>Email address must contain "@"!</EWrapper>
    }
    if(inputMethods.phoneError && inputMethods.isDirty){
      error = <EWrapper>Invalid phone shape.This item can only contain numbers.</EWrapper>
    }
    if(inputMethods.capitalError && inputMethods.isDirty){
      error = <EWrapper>The password must contain at least one uppercase letter.</EWrapper>
    }
    if(inputMethods.symbolError && inputMethods.isDirty){
      error = <EWrapper>The password must contain at least one symbol.</EWrapper>
    }

  return (
    <IWrapper>
      <Input
        onChange={(event) => inputMethods.onChange(event)}
        onFocus={() => inputMethods.onFocus(false)}
        onBlur={() => inputMethods.onBlur()}
        value={inputMethods.value}
        placeholder={placeholder}
        type={inputType}
        name={placeholder.toLowerCase()}
      />
      {error}
    </IWrapper>
  );
};

export default FormInput;