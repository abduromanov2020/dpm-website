import React from "react";

import CardBody from "../ui/cardBody/CardBody";
import CardHeader from "../ui/cardHeader/CardHeader";

import StyledCarouselCard from "./CarouselCard.styled";

function CarouselCard({ title, url, role, komisi }) {
  return (
    <StyledCarouselCard>
      <CardHeader>
        <img src={url} alt={url} />
      </CardHeader>
      {title && (
        <CardBody>
          <h2>{title}</h2>
          <h3>{komisi}</h3>
          <p>{role}</p>
        </CardBody>
      )}
    </StyledCarouselCard>
  );
}

export default CarouselCard;
