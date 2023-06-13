import React from "react";

import LogoDPM from "../../assets/logo.png";

import { HiChevronRight } from "react-icons/hi";

import List from "../ui/list/List";
import Container from "../ui/container/Container";
import Logo from "../ui/logo/Logo";

import StyledCardList from "./CardList.styled";

function CardList({ title, link }) {
  return (
    <StyledCardList>
      <a href={link} target="_blank">
        <List>
          <Container>
            <span>
              <Logo src={LogoDPM} width="55" />
            </span>
            <p>{title}</p>
          </Container>
          <span>
            <HiChevronRight />
          </span>
        </List>
      </a>
    </StyledCardList>
  );
}

export default CardList;
