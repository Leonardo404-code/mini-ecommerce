import styled from "styled-components";

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  margin-bottom: 2rem;

  div:last-child {
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
      align-items: center;
    }
  }

  @media screen and (max-width: 810px) {
    h1 {
      width: 33.3%;
      font-size: 1.5rem;
      text-align: center;
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

  @media screen and (max-width: 560px) {
    width: 5rem;
  }
`;

export const MenuMobile = styled.div`
  display: none;

  @media screen and (max-width: 810px) {
    display: block;
    height: 100%;
    width: 33.3%;
  }
`;

export const BurgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 810px) {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    height: 5rem;

    div {
      background-color: #fff;
      width: 30%;
      height: 1px;
      margin-top: 0.5rem;
      transition-duration: 0.2s;

      :last-child {
        display: ${({ menuActivate }) => (menuActivate ? "none" : "block")};
      }
    }

    .top {
      transform: ${({ menuActivate }) =>
        menuActivate ? "rotate(45deg)" : "none"};
      margin-bottom: ${({ menuActivate }) => (menuActivate ? "-8px" : "none")};
    }

    .middle {
      transform: ${({ menuActivate }) =>
        menuActivate ? "rotate(-45deg)" : "none"};
    }
  }
`;

export const NavigationMobile = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background);
  position: absolute;
  width: 100%;
  padding: 0 1rem;
  transition: transform 0.5s;
  transform: ${({ menuActivate }) =>
    menuActivate ? "translateY(0)" : "translateY(-20rem)"};

  div {
    margin-bottom: 1rem;
    p {
      color: var(--textSecondary);
      margin-top: 0.5rem;
      font-size: 0.8rem;
    }
  }

  a {
    color: #fff;
    font-size: 1.2rem;
    width: 5rem;
    margin-bottom: 1rem;
  }
`;
