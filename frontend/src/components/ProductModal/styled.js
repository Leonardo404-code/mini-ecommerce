import styled from "styled-components";

export const CloseIcon = styled.div`
  text-align: right;

  svg {
    cursor: pointer;
    margin: 1rem 1rem 0 0;
  }
`;

export const ProductContainer = styled.div`
  section {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    align-items: flex-start;

    :first-child {
      margin-bottom: 1rem;
    }
  }

  img {
    width: 25rem;
    height: 20rem;
    border-radius: 10px;
  }

  .product-info {
    text-align: right;
    text-transform: capitalize;

    h2,
    p {
      margin-bottom: 0.5rem;
    }

    input {
      background-color: transparent;
      color: #fff;
      border: none;
      font-size: 1rem;
    }
  }

  .product-info-two {
    width: 50%;
    min-height: 15rem;
    margin-bottom: 1rem;

    border: 1px solid rgba(214, 218, 222, 20%);
    border-radius: 10px;
    padding: 1rem;

    span {
      margin: 1rem 0;
    }
  }

  .actions {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    svg {
      margin-right: 0.5rem;
      font-size: 2rem;
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

  @media screen and (max-width: 560px) {
    section {
      flex-direction: column;
      justify-content: center;

      :first-child {
        align-items: center;
      }
      :last-child {
        align-items: flex-start;
      }
    }

    img {
      width: 100%;
      height: 20rem;
    }

    .product-info {
      h2 {
        text-align: center;
        font-size: 1.2rem;
      }

      p {
        font-size: 0.8rem;
        margin-top: 0.5rem;
      }
    }

    .product-info-two,
    .product-info {
      margin-top: 1rem;
      width: 100%;
      p {
        font-size: 0.8rem;
      }
    }

    .no-image {
      height: 12rem;
    }

    .actions {
      margin-top: 5rem;
      width: 100%;

      button {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .no-image {
      height: 9rem;
    }

    .actions {
      svg {
        font-size: 1.3rem;
      }
      button {
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    img {
      height: 10rem;
    }

    .product-info,
    .product-info-two {
      p {
        font-size: 0.6rem;
      }
    }

    .actions {
      svg {
        display: none;
      }

      button {
        font-size: 0.6rem;
      }
    }
  }
`;
