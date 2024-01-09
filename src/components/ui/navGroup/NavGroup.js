import styled from "styled-components";

const NavGroup = styled.ul`
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default NavGroup;
