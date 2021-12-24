import styled from "styled-components";

export const CustomButton = styled.button`
  background-color: #ffffff;
  color: #191a21;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :disabled {
    filter: brightness(50%);
    cursor: default;
  }
`;
