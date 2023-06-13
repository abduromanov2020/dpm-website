import styled from "styled-components";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem auto;
  padding: 4rem 2rem;

  img {
    padding-left: 4rem;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;

    img {
      width: 100%;
      padding-left: 0;

      padding-bottom: 2rem;
    }
  }
`;

export default StyledLogin;
