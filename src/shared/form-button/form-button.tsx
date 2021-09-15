import React from 'react';
import { Button } from './styles';
import loadingIndicator from './button-loading.gif';

interface FormButtonProps {
  loading: boolean;
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ loading, children }) => {
  return (
    <Button type='submit' name='submit' disabled={loading}>
      { loading ? <img src={loadingIndicator} height='28px' /> : children}
    </Button>
  );
};

export default FormButton;
