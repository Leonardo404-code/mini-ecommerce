import styled from "styled-components";

export const WarningContainer = styled.div`
  margin-right: 2rem;

  div:first-child {
    margin-bottom: 5rem;
  }

  .button {
    margin-top: 2rem;
  }

  @media screen and (max-width: 810px) {
    margin: 1rem;
  }
`;

export const WarningText = styled.div`
  background-color: #ffaa00;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0 1rem;

  font-size: 0.8rem;

  svg {
    color: #ff7b00;
    font-size: 3rem;
    margin-right: 0.5rem;
  }

  a {
    color: #fff;
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.5rem;
    font-weight: 600;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    font-size: 0.8rem;
    padding: 1rem;
  }
`;

export const CardContainer = styled.div`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--lineColor);
  padding: 1rem;
  overflow: auto;
  overflow-x: scroll;

  table {
    width: 100%;
    text-align: left;
    margin-top: 2rem;
    border: 1px solid var(--lineColor);

    tr {
      white-space: nowrap;
    }

    th,
    td {
      border: 1px solid var(--lineColor);
      border-collapse: collapse;
      padding: 0.2rem;
    }

    .copy-number {
      display: flex;
      align-items: center;

      svg {
        margin-left: 0.5rem;
      }

      button {
        cursor: pointer;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 1rem;

        :hover {
          filter: brightness(80%);
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    table {
      th,
      td {
        font-size: 0.8rem;
      }
    }
  }
`;
