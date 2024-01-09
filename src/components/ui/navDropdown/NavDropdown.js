import styled from "styled-components";

const NavDropdown = styled.div`
  display: block;
  position: absolute;
  right: 0;
  top: 180%;
  background-color: var(--light-mode);
  border: 1px solid #ccc;
  border-radius: 5px;

  ul {
    display: block;
    margin: 10px;
  }

  ul li {
    width: 200px;
    padding: 15px;
    text-align: start;
    list-style: none;
  }

  ul li a {
    color: var(--primary-color);
  }
`;

export default NavDropdown;
