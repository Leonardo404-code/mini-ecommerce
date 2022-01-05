import styled from "styled-components";

export const BuyContainer = styled.div`
  width: 82%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem 1rem 0;

  border-top: 1px solid rgba(214, 218, 222, 20%);

  position: absolute;
  bottom: auto;

  p,
  button {
    font-size: 1.2rem;
  }

  button {
    width: 15rem;
    font-weight: 700;
    padding: 0.7rem;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
    justify-content: space-around;

    p,
    button {
      font-size: 0.8rem;
    }

    button {
      width: 10rem;
    }
  }
`;

export const NoItens = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;
