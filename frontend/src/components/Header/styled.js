import styled from "styled-components";

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  margin-bottom: 2rem;

  div {
    display: flex;

    svg {
      margin: 0 1rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
    a {
      color: #fff;
    }

    .search-container {
      display: flex;
    }
  }
`;

export const SeachInput = styled.input`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #fff;
  font-weight: 400;
`;
