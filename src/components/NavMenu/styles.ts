import styled, { css } from 'styled-components';
interface propsItenMenu {
  disable?: boolean;
  active?: boolean;
}
export const Container = styled.div`
  height: 100vh;   
  width: 48px;
  background: red;

  background: var(--light-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  div{
    position: absolute;
    width: 40px;
    height: 40px;
    left: 26px;
    top: 551px;
    background: var(--purple);
    box-shadow: 0px 2px 4px var(--purple);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ItenMenu = styled.a<propsItenMenu>`

  display: flex; 
  align-items: center;
  justify-content: center;
  height: 46px;
  width: 100%;
  :hover {
    display: flex;
    flex-direction: column;
    background: ${({ active = false }) => active ? '    background: linear-gradient(89.96deg, var(--purple) 0.06%, #172765 99.94%);' : 'linear-gradient(95.85deg,var(--light-gray) 0%, #E5E4E2 100%)'};
    justify-content: space-between;
    cursor: pointer;
    fill: white;
    
    &::before {
      content: '';
      height: 4px;
      width: 46px;
      top: 0;
      left: 0;
      background: var(--light-gray);
      border-radius: 0 0 5px 0;
    }
    &::after {
      content: '';
      height: 4px;
      width: 46px;
      top: 0;
      left: 0;
      background: var(--light-gray);
      border-radius: 0 5px 0 0;
    }
  }
  img{
    height: 24px;
    width: 24px;
    fill: white;
  }

  ${({ active = false }) =>
    active &&
    css`
    display: flex;
    flex-direction: column;
    background: linear-gradient(89.96deg, var(--purple) 0.06%, #172765 99.94%);
    justify-content: space-between;
    &::before {
      content: '';
      height: 4px;
      width: 46px;
      top: 0;
      left: 0;
      background: var(--light-gray);
      border-radius: 0 0 5px 0;
    }
    &::after {
      content: '';
      height: 4px;
      width: 46px;
      top: 0;
      left: 0;
      background:var(--light-gray);
      border-radius: 0 5px 0 0;
    }
  `}
  ${({ disable = false }) =>
    disable &&
    css`
    :hover {
      background: var(--light-gray);
      cursor: not-allowed;
    }
  `}

`;