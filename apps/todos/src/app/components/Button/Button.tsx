import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: pink;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
`;

export function Button({ children }: ButtonProps) {
  return <StyledButton type="button">{children}</StyledButton>;
}

export default Button;
