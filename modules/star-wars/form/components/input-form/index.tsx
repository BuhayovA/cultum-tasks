//type
import { validationsReturn } from '@md-shared/types/validations';
//views
import { IWrapper, Input, EWrapper } from './views';

interface Props {
  inputMethods: validationsReturn;
  placeholder: string;
  inputType: string;
}

const FormInput: React.FC<Props> = ({ inputMethods, placeholder, inputType }) => {
  //error
  const error = inputMethods.error && <EWrapper>{inputMethods.error}</EWrapper>;

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
