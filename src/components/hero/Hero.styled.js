import styled from "styled-components";

const StyledHero = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 5rem 2rem 7rem 2rem;
  border-radius: 2rem;
  color: white;
  align-items: center;
  justify-content: space-between;
  padding: 7rem 5rem;
  background: var(--gradient-color);
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 865px) {
    flex-direction: column-reverse;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 4rem;

    img {
      width: 10rem;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 1.2em;
    }
  }
`;

export default StyledHero;
