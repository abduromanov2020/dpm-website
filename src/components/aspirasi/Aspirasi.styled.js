import styled from "styled-components";

const StyledAspirasi = styled.div`
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  display: flex;

  img {
    padding-left: 4rem;
  }

  .inputGroup {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .inputGroup label {
    margin: 1rem 0;
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;

    img {
      width: 100%;
      padding-bottom: 2rem;
      padding-left: 0;
    }

    .inputGroup {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export default StyledAspirasi;
