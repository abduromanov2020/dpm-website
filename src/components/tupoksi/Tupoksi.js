import React, { useState } from "react";

import Budgeting from "../../assets/tupoksi-1.svg";
import Legislasi from "../../assets/tupoksi-2.svg";
import Controlling from "../../assets/tupoksi-3.svg";

import { listTupoksi } from "../../utils/listTupoksi";

import Wrapper from "../ui/wrapper/Wrapper";
import Title from "../ui/title/Title";
import Box from "../ui/box/Box";
import StyledTupoksi from "./Tupoksi.styled";
import DescBox from "../ui/descBox/DescBox";
import Subtitle from "../ui/subtitle/Subtitle";

function Tupoksi() {
  const [currentValue, setCurrentValue] = useState("Legislasi");

  const clickHandle = (el) => {
    setCurrentValue(el);
  };

  return (
    <Wrapper name="tupoksi">
      <Title>Kerjaan DPM ngapain aja sih?</Title>
      <Subtitle>Tugas Pokok dan Divisi DPM STT NF</Subtitle>
      <StyledTupoksi>
        <Box
          className={currentValue === "Legislasi" ? "active" : ""}
          onClick={() => clickHandle("Legislasi")}
        >
          <span>
            <img src={Legislasi} alt="www.streamlinehq.com" />
          </span>
          <h2>Legislasi</h2>
        </Box>
        <Box
          className={currentValue === "Budgeting" ? "active" : ""}
          onClick={() => clickHandle("Budgeting")}
        >
          <span>
            <img src={Budgeting} alt="www.streamlinehq.com" />
          </span>
          <h2>Budgeting</h2>
        </Box>
        <Box
          className={currentValue === "Controlling" ? "active" : ""}
          onClick={() => clickHandle("Controlling")}
        >
          <span>
            <img src={Controlling} alt="www.streamlinehq.com" />
          </span>
          <h2>Controlling</h2>
        </Box>
      </StyledTupoksi>
      <DescBox>
        <h2>{currentValue}</h2>
        <ol>
          {currentValue === "Legislasi" &&
            listTupoksi.Legislasi.map((el) => <li key={el}>{el}</li>)}
          {currentValue === "Controlling" &&
            listTupoksi.Controlling.map((el) => <li key={el}>{el}</li>)}
          {currentValue === "Budgeting" &&
            listTupoksi.Budgeting.map((el) => <li key={el}>{el}</li>)}
        </ol>
      </DescBox>
    </Wrapper>
  );
}

export default Tupoksi;
