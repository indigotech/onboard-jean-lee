import React from 'react';
import { FormCaption, FormInput, FormFieldWrapper, FormLabel } from './styles';

interface FormFieldProps {
  name: string;
  type: string;
  onChange: (input: string) => void;
  errorMessage?: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, type, onChange, errorMessage }) => {
  return (
    <FormFieldWrapper>
      <FormLabel error={errorMessage}>{name}</FormLabel>
      <FormInput id={name} type={type} onChange={(event) => onChange(event.target.value)} error={errorMessage} />
      <FormCaption error={errorMessage}>{errorMessage ? errorMessage : 'placeholder'}</FormCaption>
    </FormFieldWrapper>
  );
};

export default FormField;
