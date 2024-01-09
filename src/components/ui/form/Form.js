import styled, { css } from "styled-components";

const Form = styled.form`
  width: 100%;
  margin: auto;

  ${(props) =>
    props.sm &&
    css`
      max-width: 600px;
    `}
`;

export default Form;
