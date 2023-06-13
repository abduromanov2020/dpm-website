import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin: 2rem auto;

  span {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary-color);
  }

  input,
  textarea {
    resize: none;
    padding: 12px 10px;
    font-size: 1em;
    color: var(--primary-color);
    width: 100%;
    box-sizing: border-box;
    border: 2px solid rgba(10, 75, 124, 0.15);
    background-color: rgba(10, 75, 124, 0.02);
    border-radius: 0.4rem;
    font-weight: bold;
  }

  textarea {
    min-height: 160px;
  }
`;

export default Label;
