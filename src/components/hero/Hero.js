import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

import LogoDPM from "../../assets/logo-bg.png";
import { Link } from "react-scroll";
import StyledHero from "./Hero.styled";
import SuperTitle from "../ui/superTitle/SuperTitle";
import Container from "../ui/container/Container";
import Button from "../ui/button/Button";
import Logo from "../ui/logo/Logo";
import Wrapper from "../ui/wrapper/Wrapper";

function Hero() {
  return (
    <Wrapper>
      <StyledHero name="hero">
        <Container>
          <SuperTitle>Dewan Perwakilan Mahasiswa 2023</SuperTitle>
          <h2> - Siap menjalankan Reformasi ! - </h2>
          <Link to="carouselVertical" smooth={true} duration={500}>
            <Button lg>
              Yuk Kenalan
              <span>
                <HiArrowNarrowRight />
              </span>
            </Button>
          </Link>
        </Container>
        <Container>
          <Logo src={LogoDPM} width="400" />
        </Container>
      </StyledHero>
    </Wrapper>
  );
}

export default Hero;
