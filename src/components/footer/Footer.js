import React from "react";
import { Link } from "react-scroll";
import Container from "../ui/container/Container";
import NavBackground from "../ui/navBackground/NavBackground";
import Title from "../ui/title/Title";
import Wrapper from "../ui/wrapper/Wrapper";
import StyledFooter from "./Footer.styled";

import LogoDPM from "../../assets/logo.png";
import LogoSTTNF from "../../assets/logosttnf.png";

import { BsInstagram } from "react-icons/bs";

import Logo from "../ui/logo/Logo";

function Footer() {
  return (
    <NavBackground>
      <Wrapper>
        <StyledFooter>
          <Container>
            <Title>DPM STT NF</Title>
            <ul>
              <Container>
                <li>
                  <Link to="hero" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="carouselVertical" smooth={true} duration={500}>
                    Visi & Misi
                  </Link>
                </li>
                <li>
                  <Link to="tupoksi" smooth={true} duration={500}>
                    Tupoksi
                  </Link>
                </li>
              </Container>
              <Container>
                <li>
                  <Link to="carousel" smooth={true} duration={500}>
                    Anggota
                  </Link>
                </li>
                <li>
                  <Link to="aspirasi" smooth={true} duration={500}>
                    Aspirasi
                  </Link>
                </li>
              </Container>
              <Container>
                <li>
                  <a href="dashboard">Dashboard</a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/dpmsttnf/"
                    target="_blank"
                    className="instagram"
                  >
                    <BsInstagram />
                    dpmsttnf
                  </a>
                </li>
              </Container>
            </ul>
          </Container>
          <Container>
            <h2>Reformasi Santai</h2>
            <p>"Santai Membawa Perubahan"</p>
            <Container className="logo">
              <Logo src={LogoDPM} width="50" />
              <Logo src={LogoSTTNF} width="50" />
            </Container>
            <p>Created by media DPM</p>
          </Container>
        </StyledFooter>
      </Wrapper>
    </NavBackground>
  );
}

export default Footer;
