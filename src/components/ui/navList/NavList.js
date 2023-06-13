import styled from "styled-components";

const NavList = styled.nav`
  position: relative;
  margin-right: 3rem;
  list-style: none;
  text-transform: uppercase;

  a {
    font-family: "Franklin", sans-serif;
    font-size: 1.05em;
    color: white;
    cursor: pointer;
  }

  a:hover {
    color: var(--secondary-color);
  }

  :last-child {
    display: flex;
    align-items: center;
    margin: 0;
    margin-top: -0.2rem;
  }

  :last-child span {
    margin-left: 0.3rem;
    font-size: 1.3rem;
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    margin: 2rem 0 !important;
  }
`;

export default NavList;
