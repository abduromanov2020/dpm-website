import styled from "styled-components";

const List = styled.li`
  list-style: none;
  padding: 0.9rem 2rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 500px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.15);
  font-size: 0.9em;
  

  > div {
    display: flex;
    align-items: center;
  }

  :hover {
    color: var(--light-mode);
    background-color: var(--primary-color);
  }

  :hover > span:last-child {
    margin-right: -0.5rem;
    transition: margin 0.2s ease-in;
  }

  @media screen and (max-width: 768px) {
    min-width: 70vw !important;
    margin-bottom: 2rem;
    padding: 1.2rem;
  }

  @media screen and (max-width: 680px) {
    max-width: 100%;
    font-size: 0.7em;

    img {
      width: 2.5rem;
    }
  }
`;

export default List;
