import styled from "styled-components";

export const Form = styled.form`
  .input-container {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    margin-top: 3rem;

    div {
      display: flex;
      flex-direction: column;

      .input-name {
        width: 20rem;
      }
      .input-value,
      .input-units {
        width: 10rem;
      }

      input {
        margin: 1rem 0;
        background-color: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        color: #fff;
        font-weight: 400;
        padding: 0.5rem 0;

        :focus {
          filter: brightness(200%);
        }
      }
    }

    textarea {
      width: 25rem;
      height: 15rem;
      background: transparent;
      padding: 1rem;
      font-size: 1rem;
      border-radius: 10px;
      color: #fff;
      font-weight: 400;
      resize: none;
      :focus {
        filter: brightness(200%);
      }
    }
  }

  .button-container {
    margin: 2rem 9rem 0 0;
  }
`;

export const FormImage = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  .no-image {
    width: 20rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #191a21;
    font-size: 2rem;
    border-radius: 10px;
    cursor: pointer;
  }
`;
