import styled from "styled-components";

export const BuyContainer = styled.footer`
  width: 82%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem 1rem 0;

  border-top: 1px solid rgba(214, 218, 222, 20%);

  position: absolute;
  bottom: 0;

  p,
  button {
    font-size: 1.2rem;
  }

  button {
    width: 15rem;
    font-weight: 700;
    padding: 0.7rem;
  }
`;

export const NoItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;
