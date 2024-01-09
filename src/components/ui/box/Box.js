import styled from "styled-components";

const Box = styled.button`
  width: 100%;
  padding: 2rem;
  margin: 2rem;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: none;
  background-color: #fff;
  cursor: pointer;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }

  h2 {
    color: var(--primary-color);
    font-size: 1.7rem;
    font-family: var(--gilroy);
  }

  span {
    font-size: 7em;
    color: var(--primary-color);
  }

  :hover {
    background-color: var(--primary-color);
    transition: all 0.1s ease-in;
  }

  :hover span,
  :hover h2 {
    color: #fff !important;
  }

  @media screen and (max-width: 900px) {
    margin: 2rem !important;
  }
`;

export default Box;
