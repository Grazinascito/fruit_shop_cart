import styled from "styled-components";

export const Container = styled.section`
  margin-top: 4rem;
  margin-bottom: 10rem;
  font-size: 1.8rem;
  width: 80rem;
`;

export const FlexContent = styled.div`
  display: flex;
  gap: 2rem;

  width: 100%;
  div {
    display: flex;
    
  }
`;

export const TableContainer = styled.div`
  border-radius: 0.7rem;
  background-color: #ffffff;
  margin-top: 2rem;

`;
export const TableContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .info-content {
    width: 70%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5rem;

    img {
      width: 5rem;
      border-radius: 50%;
    }
  }

  .button-content {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      border: none;
      padding: 1.5rem;
      color: #ffffff;
      font-weight: bold;
      background-color: #693cb7;
      border-radius: 0.5rem;

      &:hover {
        filter: brightness(1.1);
      }
    }

    .volume-buttons {
      background-color: #f05454;
      color: #ffffff;
      align-items: center;
      padding: 1.5rem;
      height: 4rem;

      display: flex;
      align-items: center;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;
