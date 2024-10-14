import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const StyledText = styled(Text)`
  font-family: "redensek";
`;

const Title = (props) => {
  return <StyledText {...props}></StyledText>;
};

export default Title;
