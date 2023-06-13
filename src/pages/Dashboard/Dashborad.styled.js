import styled from "styled-components";

const StyledDashboard = styled.div`
  padding-top: 2rem;

  > div {
    margin-bottom: 2.5rem;
  }

  p {
    font-weight: bold;
    text-align: start;
    padding-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.7em;
    font-family: var(--gilroy);
    text-transform: uppercase;
  }

  .contact {
    color: #aaa;
  }

  .aspirasi {
    font-family: var(--gilroy);
    font-size: 1.2em;
  }

  span.delete {
    position: absolute;
    top: 2rem;
    cursor: pointer;
    font-size: 1.5em;
    right: 3rem;
  }
`;

export default StyledDashboard;
