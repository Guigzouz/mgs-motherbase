import styled from "styled-components/native";
import React from "react";
import { TouchableOpacity, Image, View } from "react-native";

const Tab = ({ children, ...props }) => {
  if (!children) {
    return null;
  }

  if (children) {
    return <StyledTab {...props}>{children}</StyledTab>;
  }
};

const StyledTab = styled(TouchableOpacity)``;

export default Tab;
