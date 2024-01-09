import styled from "styled-components";

const StyledTupoksi = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;

  img {
    width: 10rem;
  }

  .active {
    background-color: var(--primary-color);
  }

  .active h2 {
    color: #fff !important;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

export default StyledTupoksi;
