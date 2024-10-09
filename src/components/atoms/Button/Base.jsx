import React from "react";
import { Pressable } from "react-native";

const Base = ({ ...props }) => {
  return <Pressable {...props}></Pressable>;
};

export default Base;
