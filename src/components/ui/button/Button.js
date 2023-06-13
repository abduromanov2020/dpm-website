import Styled, { css } from "styled-components";

const Button = Styled.button`
  font-size: 1em;
  font-weight: bold;
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  border:2px solid var(--primary-color);
  border-radius: 0.4rem;
  color: var(--light-mode);


  :hover {
    cursor: pointer;
    color: var(--primary-color);
    background: white;
    border:2px solid var(--primary-color)
  }

  ${(props) =>
    props.lg &&
    css`
      display: flex;
      align-items: center;
      padding: 1.2rem 2rem;
      color: white;
      font-weight: bold;
      margin: 2rem 0;
      font-size: large;
      border: 2px solid #fff;
      border-radius: 20px;
      background-color: transparent;

      :hover {
        background-color: var(--primary-color);
        color: white;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.1s ease-in;
        box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.15);
      }

      span {
        margin-left: 0.5rem;
      }

      :hover > span {
        transform: rotate(90deg);
        transition: all 0.1s ease-in;
      }
    `};
`;

export default Button;
