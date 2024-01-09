import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  color: #fff;

  .logo {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .instagram {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  h1,
  h2,
  p,
  a {
    color: var(--primary-color);
  }

  p:last-child {
    font-size: 0.9em;
    font-weight: bold;
  }

  ul {
    display: flex;
    gap: 5rem;
    padding: 2rem 0;
  }

  ul li {
    list-style: none;
    text-transform: uppercase;
    padding-bottom: 1.5rem;
  }

  h1 {
    text-align: start;
  }

  a {
    font-family: "Franklin", sans-serif;
    font-size: 1.05em;
    cursor: pointer;
  }

  a:hover {
    color: var(--secondary-color);
  }

  h2 {
    padding-bottom: 0.2rem;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media only screen and (max-width: 450px) {
    ul {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export default StyledFooter;
