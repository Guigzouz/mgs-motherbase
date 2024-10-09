import React from "react";
import styled from "styled-components/native";

const StyledCard = styled.View`
  background-color: ${(props) => props.backgroundColor ?? "purple"};
  text-transform: ${(props) => props.textTransform ?? "uppercase"};
`;

const Card = (props) => {
  return <StyledCard {...props}></StyledCard>;
};

export default Card;
