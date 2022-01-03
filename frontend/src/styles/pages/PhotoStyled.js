import styled from "styled-components";

export const FormImage = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p{
    margin-top: 1rem
  }

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
