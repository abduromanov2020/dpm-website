import React from "react";

import { listProdukHukum } from "../../utils/listProdukHukum";

import StyledProdukHukum from "./produkHukum.styled";

import CardList from "../cardList/CardList";

import NavGroup from "../ui/navGroup/NavGroup";
import Title from "../ui/title/Title";
import Wrapper from "../ui/wrapper/Wrapper";
import Subtitle from "../ui/subtitle/Subtitle";

function ProdukHukum() {
  return (
    <Wrapper>
      <StyledProdukHukum name="produkHukum">
        <Title>Produk Hukum</Title>
        <Subtitle>Produk Hukum IM STT NF</Subtitle>

        <NavGroup>
          {listProdukHukum.map((el) => (
            <CardList title={el.title} link={el.link} key={el.title} />
          ))}
        </NavGroup>
      </StyledProdukHukum>
    </Wrapper>
  );
}

export default ProdukHukum;
