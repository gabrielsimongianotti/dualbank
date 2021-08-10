import styled from 'styled-components';
import SVG from "react-inlinesvg";

export const Container = styled.div`
  display: flex;
  width: 100%;

`;

export const Content = styled.div`
  width: 100%;
`;
export const Icon = styled(SVG)`
  width: 100%;
`;
export const BankBalance =styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 8px;
   
  p{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
  
    width: 80px;
    height: 40px;

    border: 1px solid var(--purple);
    box-sizing: border-box;
    border-radius: 5px;
    margin: 0px 8px;
    :hover{
      path{
        stroke: #fff;
      }
      background: linear-gradient(270deg, var(--purple) 0%, #A683FF 100%);
      border: 0px solid transparent;
    }
  }
`;
