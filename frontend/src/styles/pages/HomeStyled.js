import styled from "styled-components";

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
  cursor: pointer;
  margin-bottom: 1rem;

  :hover {
    transform: scale(1.05);
  }

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

    :hover {
      transform: none;
    }
  }

  @media screen and (max-width: 435px) {
    width: 90%;
    margin-right: 0;
  }
`;

export const NoProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
