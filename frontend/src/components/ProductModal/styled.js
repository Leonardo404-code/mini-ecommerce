import styled from "styled-components";

export const CloseIcon = styled.div`
  text-align: right;

  svg {
    cursor: pointer;
  }
`;

export const ProductContainer = styled.div`
  section {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;

    :first-child {
      align-items: flex-start;
    }
    :last-child {
      align-items: flex-end;
    }
  }

  img {
    width: 25rem;
    height: 20rem;
    border-radius: 10px;
  }

  .product-info {
    text-align: right;

    h2,
    p {
      margin-bottom: 0.5rem;
    }

    input {
      background-color: transparent;
      color: #fff;
      border: none;
      width: 10%;
      font-size: 1rem;
    }
  }

  .product-info-two {
    width: 50%;

    p {
      margin: 1rem 0;
    }
  }

  .actions {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    svg {
      margin-right: 0.5rem;
    }

    button {
      width: 22rem;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.3rem;
      letter-spacing: 0.2rem;

      :hover {
        filter: brightness(80%);
      }
    }

    div {
      max-height: 416px;
    }
  }
`;
