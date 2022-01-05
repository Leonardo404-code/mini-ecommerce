import styled from "styled-components";

export const FormImage = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin-top: 1rem;
  }

  img {
    width: 20rem;
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 560px) {
    padding: 0 2rem;

    img {
      width: 20rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  text-align: right;
  padding: 5rem 3rem 0 0;
`;
