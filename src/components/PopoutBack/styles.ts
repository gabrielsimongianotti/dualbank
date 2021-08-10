import styled, { css } from 'styled-components';
interface propsContainer {
  show: boolean;
}
export const Container = styled.div<propsContainer>`
  position: relative;
  div {
    display: block;
    overflow:auto; 
    width: 280px;
    height: 193px;
    padding:  16px;
    background: linear-gradient(89.96deg,var(--light-gray) 0.06%, #E5E4E2 99.94%);
    border-radius: 4px;
    padding: 20px;
    padding-bottom: 0px;
    padding-top: 0px;

    ${({ show }) => show?
    css`opacity:1;visibility:  visible;`:
    css`opacity:0; visibility:hidden;`};
    transition: opacity 0.4s;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));

    position: absolute;
    bottom: calc(100% - 210px);
    left: 640%;
    transform: translateX(-50%);
   
    span{
      font-size: 14px;
      color: #172765;
      margin-top: 5px;

    }

    p{
      font-size: 10px;
      margin-bottom: 13px;
      color: var(--purple);
    }

    &::before{
      content:'';
      bottom:20px;
      top: 100%;
      position:absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
