import styled, { css } from 'styled-components';

interface ContainerToast {
  type: 'success' | 'error' | 'info';
  hasDescripton: boolean;
}

const ToastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,

  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const ContainerToast = styled.div<ContainerToast>`
  position: relative;
  display: flex;

  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0, 0.2);

  & + div {
    margin-top: 6px;
  }

  ${props => ToastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
    p {
      margin-top: 4px;
      opacity: 0.8;

      font-size: 14px;
      line-height: 20px;
    }
  }

  button {
    position: absolute;

    top: 19px;
    right: 8px;

    opacity: 0.8;
    border: transparent;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescripton &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
