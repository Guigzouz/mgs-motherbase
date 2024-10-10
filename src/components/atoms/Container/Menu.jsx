import { View } from "react-native";
import styled from "styled-components";

const StyledView = styled(View)``;

const Menu = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};

export default Menu;
