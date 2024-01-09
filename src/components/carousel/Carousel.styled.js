import styled from "styled-components";

const StyledCarousel = styled.div`
  padding: 7rem 3rem;

  .slick-slide > div {
    margin: 0 25px;
  }

  .slick-list {
    margin: 0 -10px;
  }

  .slick-next,
  .slick-prev {
    padding: 14px;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
    border: none;
    border-radius: 5vw;
    background-color: #fff;
    z-index: 99 !important;
    margin: 0 -0.5rem;
    box-shadow: rgb(35 35 35 / 25%) 0px 0px 20px 1px;
    top: 45%;
    color: var(--primary-color);
  }

  .slick-next:hover,
  .slick-prev:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`;

export default StyledCarousel;
