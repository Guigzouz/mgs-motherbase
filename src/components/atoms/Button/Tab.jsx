import styled from "styled-components/native";
import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Icon } from "..";

// 3 cases handled : onlyicon button, icon&text button, empty button

const Tab = ({ children }) => {
  if (!children) {
    return null;
  }

  if (children) {
    return <StyledTab>{children}</StyledTab>;
  }
};

const StyledTab = styled(TouchableOpacity)``;

export default Tab;
