import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { useFonts } from "expo-font";

import { Icon, Typography } from "../src/components/atoms";
import { Container } from "../src/components/atoms";
import { ActionCategoryMenu } from "../src/components/molecules";
import { LogsMenu } from "../src/components/molecules";
import Input from "../src/components/atoms/Input/Base";
import BottomTabMenu from "../src/components/molecules/BottomTabMenu";
import { MovingDisplay } from "../src/components/atoms/Container";
import HumanResourcesScene from "../src/components/pages/HumanResources";

const StyledViewTest = styled.View`
  width: 100%;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
`;

const user = {
  nickName: "Revolver Moose",
  pim: 498,
};

export default function App() {
  return (
    <StyledViewTest>
      <View>
        <Container.MovingDisplay
          style={{
            overflow: "hidden",
          }}
        >
          <Typography.Title
            style={{
              fontSize: 36,
              paddingHorizontal: 25,
              paddingTop: 25,
              paddingBottom: 10,
              fontFamily: "redensek",
              whiteSpace: "nowrap",
            }}
          >
            {user.nickName}'s MB
          </Typography.Title>
        </Container.MovingDisplay>
        <Typography.Title
          style={{
            fontFamily: "redensek",
            fontSize: 24,
            paddingHorizontal: 25,
          }}
        >
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

      <HumanResourcesScene></HumanResourcesScene>
      <View>
        <ActionCategoryMenu
          onMenuChange={(arg) => {
            setMenu(arg);
          }}
          configs={[
            {
              displayName: "Human Resources",
              slug: "human-resources",
              iconName: "child",
              fontFamily: "redensek",
            },
            {
              displayName: "R&D",
              slug: "reasearch-and-devlopment",
              iconName: "wrench",
            },
            {
              displayName: "External OPS",
              slug: "external-operations",
              iconName: "boxes",
            },
          ]}
        ></ActionCategoryMenu>
        <BottomTabMenu
          configs={[
            {
              displayName: "Home",
              slug: "",
              iconName: "home",
              iconColor: "#FFFF00",
            },
            {
              displayName: "Profile",
              slug: "profile",
              iconName: "user",
            },
          ]}
        ></BottomTabMenu>
      </View>
      <StatusBar style="auto" />
    </StyledViewTest>
  );
}
