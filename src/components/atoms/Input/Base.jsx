import React from "react";
import styled from "styled-components/native";

const StyledInput = styled.TextInput``;

const Input = (props) => {
  return <StyledInput {...props}></StyledInput>;
};

export default Input;
