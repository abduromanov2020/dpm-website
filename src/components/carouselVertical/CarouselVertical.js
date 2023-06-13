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
      <Title>Visi & Misi Reformasi Santai</Title>
      <Subtitle>DPM 2022 - Reformasi Santai</Subtitle>
      <StyledCarousel>
        <Container>
          <Title>Visi</Title>
          <p>
            Mewujudkan DPM sebagai lembaga yang dapat mengayomi nilai niali
            hukum keorganisasian lFK STT NF dengan SANTAI (Sinergi, Aktif,
            Nyata, Transparan, Aspiratif, Integratif)
          </p>
          <Title>Misi</Title>
          <ol>
            <li>Mengoptimalkan fungsi lembaga DPM dalam lingkungan STT NF</li>
            <li>
              Menciptakan suasana kepengurusan yang harmonis didalam internal
              DPM
            </li>
            <li>
              Bersinergi bersama LFK STT NF guna membangun kualitas hubungan dan
              komunikasi yang baik antai LFK STT NF
            </li>
            <li>
              Mengevaluasi serta membenahi produk hukum yang ada demi
              kelangsungan sistem organisasi yang terstruktur rapih di STT NF
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
