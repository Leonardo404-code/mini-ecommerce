import styled from "styled-components";

export const PaymentContainer = styled.div`
  form {
    width: 30vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
  }

  #payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }

  #payment-element {
    margin-bottom: 24px;
  }

  button {
    width: 100%;
    margin-top: 1rem;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @media screen and (max-width: 560px) {
    width: 100%;

    form {
      width: 100%;
    }
  }
`;

export const PaymentSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 2.5rem;

  .product-info {
    width: 50%;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid rgba(214, 218, 222, 20%);
  border-radius: 10px;

  margin-bottom: 1rem;
  padding-right: 0.5rem;

  img {
    width: 5rem;
    border-radius: 10px 0 0 10px;
  }

  .no-image {
    height: 5rem;
  }

  div {
    margin-left: 1rem;
  }

  @media screen and (max-width: 560px) {
    .product-image {
      width: 5rem;
    }

    div {
      padding: 1rem 0;
    }
  }
`;
