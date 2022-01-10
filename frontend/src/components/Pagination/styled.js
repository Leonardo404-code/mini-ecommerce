import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .paginationItem {
    background: transparent;
    border: none;
    color: #fff;
    padding: 1rem;
    position: relative;
    margin: 0 0.5rem;
    cursor: pointer;
  }

  .paginationItem span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .prev,
  .next {
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .paginationItem.active {
    color: #888;
    pointer-events: none;
  }

  .prev.disabled,
  .next.disabled {
    pointer-events: none;
    box-shadow: none;
    color: #999;
  }
`;
