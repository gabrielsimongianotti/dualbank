import styled from 'styled-components';

type ItemTagProps = {
  backgroundColor?: string
}

export const DateText = styled.p<ItemTagProps>`
  font-family: Lato;

  font-size: 12px;
  line-height: 14px;


  color: var(--purple);
`;

export const Frame = styled.div`
  margin-right: 64px;
  display: flex; 
  margin-left:20px;
  align-items: center;
  width: 280px;
  height: 47px;

  background: var(--light-gray);

  border: 0.5px solid #E5E4E2;
  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid #172765;

  img{
    margin: 10px;    
  }
  p {
    font-size: 12px;
    color: var(--green);
    margin-right: 10px;
    color: #778899;
  }

  span{
    font-size: 12px;
    color: var(--green);
    margin-right:10px;
  }
  div{
    width: 280px;
  }
`;

export const Title = styled.div`
  margin-right: 64px;
  margin-left:20px;
  display: flex; 
  align-items: center;
  padding-left: 16px;
  width: 280px;
  height: 47px;

  background: var(--light-gray);
 
  border: 0.5px solid #E5E4E2;
  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid var(--purple);

  img{
    margin: 10px;    
  }
  span{
    font-size: 12px;
    color: var(--green);
    margin-right:10px;
  }
  div{
    width: 280px;
  }
`;

export const Description = styled.div`
  margin-right: 64px;
  margin-left:20px;
  padding-left: 16px;

  display: flex; 
  align-items: center;
  
  width: 280px;
  height: 47px;


  p {
    color: #172765;
    font-family: Lato;
    font-size: 12px;
    line-height: 17px;  
  }

  img {
    margin: 10px;
  }
`;