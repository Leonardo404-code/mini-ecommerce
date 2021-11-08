import styled from "styled-components";

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  margin-bottom: 2rem;

  div {
    svg {
      margin: 0 1rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
    a {
      color: #fff;
    }
  }
`;
