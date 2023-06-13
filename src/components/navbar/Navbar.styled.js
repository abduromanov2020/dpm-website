import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;

  .instagram {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;

    ul {
      margin: 2rem 0;
    }
  }
`;

export default StyledNavbar;
