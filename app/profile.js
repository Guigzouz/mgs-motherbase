import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import { Icon, Typography } from "../src/components/atoms";
import { Container } from "../src/components/atoms";
import { ActionCategoryMenu } from "../src/components/molecules";
import { LogsMenu } from "../src/components/molecules";
import Input from "../src/components/atoms/Input/Base";
import BottomTabMenu from "../src/components/molecules/BottomTabMenu";
const StyledViewTest = styled.View`
  width: 100%;
  justify-content: space-between;
`;

const user = {
  nickName: "Revolver Moose",
  pim: 498,
};

export default function Profile() {
  return (
    <StyledViewTest>
      <View>
        <Typography.Title
          style={{
            fontSize: 28,
            paddingHorizontal: 25,
            paddingTop: 25,
            paddingBottom: 10,
          }}
        >
          {user.nickName}'s MB
        </Typography.Title>
        <Typography.Title style={{ fontSize: 12, paddingHorizontal: 25 }}>
          PIM Count : {user.pim}
        </Typography.Title>
      </View>

      <Container.AbsoluteCard>
        <LogsMenu
          configs={[
            {
              displayName: "R&D",
              slug: "reasearch-and-devlopment",
              iconName: "box",
              iconSize: 18,
            },
          ]}
        ></LogsMenu>
      </Container.AbsoluteCard>

      <View>
        <Text>Save you progress here !</Text>
      </View>

      <View>
        <BottomTabMenu
          configs={[
            {
              displayName: "Home",
              slug: "",
              iconName: "home",
            },
            {
              displayName: "Profile",
              slug: "profile",
              iconName: "user",
              iconColor: "#FFFF00",
            },
          ]}
        ></BottomTabMenu>
      </View>
      <StatusBar style="auto" />
    </StyledViewTest>
  );
}
