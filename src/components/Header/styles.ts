import styled from 'styled-components';
export const Container = styled.header`
  background: var(--white);
  height: 71px;
  padding: 0rem 1rem 0rem; 
  display: flex; 
  align-items: center;
  justify-content: space-between;
`;

export const ImageLogo = styled.img`
  padding-right: 0.5rem;
  border-right: 3px solid #E5E4E2;
`;

export const ImageUser = styled.img`
  height: 50px;
  width: 50px;
  border: 2px solid #4C77BF;
  border-radius: 25px;
`;

export const RightFrame = styled.div`
  margin: 1rem;
  display: flex; 
  align-items: center;
  p {
    font-size: 16px;
  }

  span{
    font-size: 12px;
    color: var(--purple);
    margin-right:10px;
  }

  img{
    margin: 5px;
  }

  div{
    width: 160px;
    height: 2rem;
    display: flex; 
    border-radius: 0.25rem;
    border: 2px solid #d7d7d7;

    img{
      margin-right: 10px;
      width: 16px;
      height: 16px;
    }
    
    input {
      width:100%;
      height: 100%;
      padding: 0 1rem;
      border: 0px;
      font-weight: 400;
      font-size: 14px;
      outline: none;
    }
  }
`;

export const LeftFrame = styled.div`
  display: flex; 
  align-items: center;
`;

export const Frame = styled.div`
  margin: 1rem;
  
  div{
    p {
      font-size: 16px;
    }
  }
  span{
    font-size: 12px;
    color: var(--purple);
    margin-right:10px;
  }

  div{
    display: flex; 
    align-items: center;
    img{
      margin-left: 5px;
    }

  }
`;


export const Copy = styled.div`
  display: flex;
  margin-top: 5px;
`;