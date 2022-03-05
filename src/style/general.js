import styled from "styled-components";


export const Container = styled.div`

border: 1px solid blue;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


h1{ 
    
    margin-bottom: 2rem;
    font-size: 7rem;
    color: #F05454;
    
}
`

export const Content = styled.section`

  width: 70rem;
  
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  gap: 4rem;


  img{
      width: 10rem;
  }

  div{
      
      width: 30rem;
      height: 30rem;
      padding: 4rem 0 2rem 0;
      border-radius: 0.8rem;

      background-color: #ffffff;

      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      text-align: center;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content:space-between;
  }

  button{
      background-color: #F05454;
      border: 0;
      padding: 1.5rem;
      border-radius: 3rem;
      color: #ffffff;
      font-weight: bold;

      &:hover{
          filter: brightness(1.1);
      }
      
  }


`