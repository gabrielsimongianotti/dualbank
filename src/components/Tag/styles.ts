import styled, { css } from 'styled-components';

type ItemTagProps = {
  backgroundColor?: string
}

export const ItemTag = styled.p<ItemTagProps>`
  width: 36px;
  height: 36px;
  display: flex; 
  justify-content: center;
  align-items: center;
  border-radius: 25px;

  ${({ backgroundColor = 'var(--purple)' }) =>
    css`
      background: linear-gradient(135deg, ${backgroundColor} 0%, #172765 100%);
    `}

  color:var(--background);
  margin-right: 10px;
`;

export const Frame = styled.div`
  margin-right: 64px;
  display: flex; 
  align-items: center;
  
  &:first {
    margin-left:1600px;
  }

  p {
    font-size: 16px;
  }

  span{
    font-size: 12px;
    color: var(--green);
    margin-right:10px;
  }
  div{
    div{
      display: flex; 
      align-items: center;
      img{
        margin-left: 5px;
      }
    }
  }
`;