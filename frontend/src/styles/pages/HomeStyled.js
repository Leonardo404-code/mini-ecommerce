import styled from "styled-components";

export const ProductSection = styled.section`
  display: flex;
  align-items: center;
`;

export const ProductContainer = styled.div`
  width: 20rem;
  border: 1px solid rgba(214, 218, 222, 20%);
  border-radius: 10px;
  padding: 1rem;
  margin-right: 2rem;
  transition-duration: 0.5s;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  .no-image {
    width: 100%;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #191a21;
    font-size: 2rem;

    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 15rem;
    border-radius: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .units {
    color: #4d5254;
  }
`;
