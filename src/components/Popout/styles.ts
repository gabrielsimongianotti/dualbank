import styled from 'styled-components';

export const Container = styled.div`

  div {
    height: 28px;
    background: var(--white);
    border-radius: 4px;
    padding: 4px;
    font-size: 14px;
    font-weight: 500px;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));

    position: absolute;
    bottom: calc(100% + 7px);
    left: 50%;
    transform: translateX(-50%);

    color: #000;

    &::before{
      content:'';
      border-style: solid;
      border-color: var(--white) transparent;
      border-width: 7px 7px 0px 7px;
      bottom:20px;
      top: 100%;
      position:absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover div {
      opacity: 1;
      visibility: visible;
    }
  &:hover {
    position: relative;
  }
`;
