import Slider from "react-slick";

import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

import { member } from "../../utils/listMember";

import Wrapper from "../ui/wrapper/Wrapper";
import Title from "../ui/title/Title";
import StyledCarousel from "./Carousel.styled";
import CarouselCard from "../carouselCard/CarouselCard";
import Subtitle from "../ui/subtitle/Subtitle";

export default function Carousel() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <HiChevronLeft />,
    nextArrow: <HiChevronRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper name="carousel">
      <StyledCarousel>
        <Title> Reformasi Santai Squad</Title>
        <Subtitle>PI dan Staff Reformasi Santai</Subtitle>
        <Slider {...settings}>
          {member.map((member) => (
            <CarouselCard
              title={member.title}
              url={member.url}
              role={member.role}
              komisi={member.komisi}
            />
          ))}
        </Slider>
      </StyledCarousel>
    </Wrapper>
  );
}
