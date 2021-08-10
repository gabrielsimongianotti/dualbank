import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  div {
    width: 280px;
    height: 193px;
    background: linear-gradient(89.96deg,var(--light-gray) 0.06%, #E5E4E2 99.94%);
    border-radius: 4px;
    padding: 20px;
    font-size: 14px;
    font-weight: 500px;
    opacity: 1;
    transition: opacity 0.4s;
    visibility: hidden;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));

    position: absolute;
    bottom: calc(100% - 243px);
    left: 240%;
    transform: translateX(-50%);
  
    span{
      font-size: 16px;
      color: #172765;
    }

    p{
      font-size: 14px;
      color: var(--green);

      span{
        font-size: 14px;
        color: #172765;
      }
    }
    button{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 28px;
      
      margin-top: 21px;
      position: absolute;
      width: 117px;
      height: 40px;
      border:0px;

      color: var(--white);
      font-family: "Raleway";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;                      

      background: var(--purple);
      border-radius: 5px;
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

  &:hover div {
      opacity: 1;
      visibility: visible;
    }
`;
