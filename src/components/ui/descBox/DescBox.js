import styled from "styled-components";

const DescBox = styled.div`
  max-width: 100%;
  margin: 0 2rem;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.15);
  padding: 3rem 5rem;
  border-radius: 15px;
  color: var(--primary-color);
  position: relative;

  h2 {
    text-align: center;
    font-family: var(--gilroy);
    font-size: 2.5em;
    padding-bottom: 2rem;
  }

  .title {
    display: flex;
    font-family: var(--gilroy);
  }

  ol li {
    line-height: 1.4em;
    font-size: 1em;
    font-weight: bold;
    line-height: 2rem;
  }

  @media screen and (max-width: 900px) {
    padding: 2rem;
    margin: 0 2rem;
  }
`;

export default DescBox;
