import styled from "styled-components";

export const CreditsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  text-align: justify;

  img {
    border-radius: 50%;
    margin-right: 1.5rem;
  }

  div {
    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;

    img {
      width: 8rem;
    }

    div {
      margin-top: 1.2rem;
      font-size: 0.8rem;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: #fff;

    p {
      margin: 0 1rem;
    }

    :hover {
      filter: brightness(80%);
    }
  }

  .github {
    background-color: #262626;
  }

  .linkedin {
    background-color: #0077b5;
  }

  .instagram {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }

  @media screen and (max-width: 560px) {
    flex-wrap: wrap;

    a {
      margin-top: 1rem;
    }
  }
`;
