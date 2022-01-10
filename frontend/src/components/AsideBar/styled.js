import styled from "styled-components";

export const AsideBarContainer = styled.aside`
  position: fixed;
  height: 100%;
  border-right: 1px solid rgba(214, 218, 222, 20%);

  @media screen and (max-width: 810px) {
    display: none;
  }
`;

export const AsideBarNavigation = styled.div`
  margin: 0;
  padding: 2rem 0.5rem 0 1.5rem;
  width: 200px;
  height: 100%;
  position: relative;
  transition-duration: 0.5s;

  div {
    p {
      color: #5c5e64;
      margin-top: 0.5rem;
      font-size: 0.8rem;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    align-items: flex-start;
    margin-top: 3rem;

    a {
      color: #fff;
      font-size: 1.2rem;
      width: 5rem;
      margin-bottom: 1rem;
    }
  }
`;
