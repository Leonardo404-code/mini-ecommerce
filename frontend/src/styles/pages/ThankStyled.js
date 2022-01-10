import styled from "styled-components";

export const ThanksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  a {
    color: #fff;
    text-decoration: underline;
    margin-left: 0.5rem;
  }

  svg {
    margin: 0 0.5rem;
  }

  .heart {
    color: #d00000;
  }

  .star {
    color: #faa307;
  }

  @media screen and (max-width: 560px) {
    img {
      width: 80%;
    }

    margin: 0 1rem;

    p {
      font-size: 0.8rem;
      flex-direction: column;
    }

    svg {
      margin: 0.5rem 0;
    }
  }
`;
