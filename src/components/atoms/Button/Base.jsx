import styled from "styled-components/native";
import React from "react";
import { TouchableOpacity, Image, View } from "react-native";

// 3 cases handled : onlyicon button, icon&text button, empty button

const Base = ({ children }) => {
  if (!children) {
    return null;
  }

  if (children) {
    return <StyledBase>{children}</StyledBase>;
  }
};

const StyledBase = styled(TouchableOpacity)`
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border: solid;
`;

const StyledButtonIconOnly = styled(TouchableOpacity)`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border: solid;
`;

export default Base;
