import styled from 'styled-components';

export const Container = styled.div`
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

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #F4EDE8;


    ::placeholder{
      color: #565656;
    }
  }


  svg {
    margin-right: 16px;
  }
`;