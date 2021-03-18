import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: #111112;
  border-radius: 10px;
  border: 2px solid #111112;

  padding: 16px;
  width: 100%;
  color: #565656;

  & + div {
    margin-top: 8px;
  }

${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #fcce0f;
      border-color: #fcce0f;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #fcce0f;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    ::placeholder {
      color: #565656;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const ErrorContainer = styled.div`
  height: 20px;
  margin-left: 16px;
  
  svg {
    margin: 0;
  }
`;