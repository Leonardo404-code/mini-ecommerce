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

  @media screen and (max-width: 810px) {
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

export const ProductSection = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 810px) {
    justify-content: center;
  }
`;

export const ProductContainer = styled.div`
  width: 19rem;
  border: 1px solid rgba(214, 218, 222, 20%);
  border-radius: 10px;
  padding: 1rem;
  margin-right: 2rem;
  transition-duration: 0.5s;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 15rem;
    border-radius: 10px;
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    p {
      :first-child {
        text-transform: capitalize;
      }
    }

    :last-child {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;

      svg {
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
  }

  .units {
    color: var(--textSecondary);
  }

  p {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 1024px) {
    width: 15rem;
  }

  @media screen and (max-width: 560px) {
    width: 13rem;

    margin-right: 1rem;

    p {
      font-size: 0.8rem;
    }

    img {
      height: 12rem;
    }
  }

  @media screen and (max-width: 435px) {
    width: 90%;
    margin-right: 0;
  }
`;
