import styled from 'styled-components';

interface FormElementProps {
    error?: string;
  }

export const FormFieldWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: left;
`
export const FormInput = styled.input<FormElementProps>`
  width: 300px;
  height: 48px;
  border-width: 1px;
  border-color: ${props => props.error ? 'red' : 'gray'};
  border-radius: 20px;
  outline: none;
  padding-left: 12px;
  box-sizing: border-box;
`;

export const FormLabel = styled.label`
  font-size: 12px;
  font-weight: normal;
  color: #777777;
  margin-bottom: 12px;
  text-align: left;
  text-transform: lowercase;
`;

export const FormCaption = styled.h6<FormElementProps>`
  font-size: 12px;
  font-weight: normal;
  color: red;
  margin-top: 8px;
  visibility: ${props => props.error ? 'visible' : 'hidden'};
`;
