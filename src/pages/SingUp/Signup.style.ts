import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import signupCover from '../../assets/signup-cover.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  > a {
    color: #fcce0f;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#fcce0f')};
    }
  }
`;

export const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContent = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  animation: ${apperFromRight} 1s;

  form {
    margin: 32px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-family: 'Playfair Display';
      font-weight: 700;
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signupCover}) no-repeat center;
  background-size: cover;
  filter: grayscale(100%);
  opacity: 0.9;
`;
