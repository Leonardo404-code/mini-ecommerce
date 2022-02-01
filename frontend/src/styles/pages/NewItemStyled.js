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

      p {
        font-size: 0.9rem;
      }

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

  @media screen and (max-width: 560px) {
    .input-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      div,
      textarea {
        width: 80%;
      }
    }

    .button-container {
      margin: 2rem 1rem 0 0;
    }
  }

  @media screen and (max-width: 414px) {
    .input-container {
      div {
        .input-name,
        .input-value,
        .input-units {
          width: 80%;
        }
      }
    }
  }
`;
