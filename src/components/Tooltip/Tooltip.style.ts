import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    top: calc(100% + 8px);
    left: 1%;

    width: max-content;
    
    padding: 8px;
    border-radius: 4px;
    background-color: #131314;
    z-index: 10;
    
    opacity:0;
    visibility: hidden;

    border: 1px solid #fcce0f;

    color: #fcce0f;
    font-size: 14px;
    font-weight: 500;

    transition: all 0.4s;

    &::before {
      border-style: solid;
      border-color: #fcce0f transparent;
      border-width: 6px 6px 0 6px;
      content: '';
      position: absolute;

      bottom: 100%;
      transform: translateX(-50%);

      transform: rotate(180deg);
    }

  }

  &:hover span { 
    opacity: 1;
    visibility: visible;

  }

`; 