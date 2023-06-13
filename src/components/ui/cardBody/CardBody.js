import styled from "styled-components";

const CardBody = styled.div`
  padding: 1.5rem;
  text-align: center;

  h2,
  h3 {
    color: var(--primary-color);
    font-family: var(--gilroy);
  }

  h3 {
    padding-top: 0.1rem;
    padding-bottom: 0.3rem;
    font-size: 1.25em;
  }

  p {
    color: #999;
    font-weight: bold;
  }
`;

export default CardBody;
