import styled from "styled-components";

const StyledCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 3rem 7rem 3rem;

  > div:first-child {
    flex-basis: 50%;
  }
  > div:last-child {
    max-width: 520px;
    padding-left: 4rem;
  }

  p,
  ol {
    padding: 1rem 0 2rem 0;
  }

  p,
  li {
    line-height: 2rem;
    font-weight: bold;
  }

  .slick-next,
  .slick-prev {
    display: none;
    cursor: auto;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;

    > div:last-child {
      padding: 0;
      padding-bottom: 4rem;
      width: 100%;
    }
  }
`;

export default StyledCarousel;
