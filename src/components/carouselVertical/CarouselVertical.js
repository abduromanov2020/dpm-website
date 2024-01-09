import Slider from "react-slick";

import { DpmPhoto } from "../../utils/listDpmPhoto";

import Wrapper from "../ui/wrapper/Wrapper";
import Title from "../ui/title/Title";
import StyledCarousel from "./Carousel.styled";
import CarouselCard from "../carouselCard/CarouselCard";
import Subtitle from "../ui/subtitle/Subtitle";
import Container from "../ui/container/Container";

export default function CarouselVertical() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <Wrapper name="carouselVertical">
      <Title>Visi & Misi</Title>
      <Subtitle>DPM 2023 - ALPHA ESTAFETA</Subtitle>
      <StyledCarousel>
        <Container>
          <Title>Visi</Title>
          <p>
            Menjadikan Dewan Perwakilan Mahasiswa STT NF yang berintegritas dan
            aktif dengan asas kebersamaan dan kekeluargaan dalam melaksanakan
            fungsi dari DPM.
          </p>
          <Title>Misi</Title>
          <ol>
            <li>
              Meningkatkan loyalitas, solidaritas dan kekeluargaan internal DPM
              STT NF
            </li>
            <li>
              Mengoptimalkan landasan hukum dan fungsi pengawasan, aspirasi dan
              kaderisasi DPM STT NF
            </li>
            <li>
              Meningkatkan komunikasi dan kedekatan antar Organisasi
              Kemahasiswaan STT NF
            </li>
          </ol>
        </Container>
        <Container>
          <Slider {...settings}>
            {DpmPhoto.map((member) => (
              <CarouselCard url={member.url} />
            ))}
          </Slider>
        </Container>
      </StyledCarousel>
    </Wrapper>
  );
}
