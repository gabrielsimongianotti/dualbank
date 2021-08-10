import styled from 'styled-components';

export const Container = styled.div`
  height: 44px;
  width: 100%;
  margin-left: 2px;
  padding: 0rem 1rem 0rem; 
  display: flex; 
  align-items: center;
  background: var(--light-gray);
  box-shadow: 0px 1px 3px 0px #00000020;

`;

export const Button = styled.p`
  height: 36px;
  width: 36px; 
 
  background: linear-gradient(135deg, #var(--white) 0%, #E5E4E2 100%);
  border-radius: 18px;

  margin: 8px;
  display: flex; 
  align-items: center;
  justify-content: center;
  img {
    height: 24px;
    width: 24px;
  }
  &+&{
    margin-right: 32px;
  }
`;