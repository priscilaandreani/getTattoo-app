import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
background: transparent;
      border-radius: 10px;
      border: 1px solid #a38406 ;

      padding: 0 16px;
      margin-top: 16px;
      width: 100%;
      height: 46px;

      color: #a38406;
      font-family: 'Playfair Display';
      font-weight: 700;
      transition: background-color 0.2s;

      &:hover{
        background: ${darken(0.2, '#fcce0f')};
        color: #111112;
      }
`
