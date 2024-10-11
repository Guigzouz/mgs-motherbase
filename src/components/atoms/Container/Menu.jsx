import { View } from "react-native";
import styled from "styled-components";

const StyledView = styled(View)``;

const Menu = ({ children, ...props }) => {
  return <StyledView {...props}>{children}</StyledView>;
};

export default Menu;
