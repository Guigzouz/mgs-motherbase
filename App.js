import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Icon, Typography } from "./src/components/atoms";
import { Container } from "./src/components/atoms";
import { ActionCategoryMenu } from "./src/components/molecules";
import { LogsMenu } from "./src/components/molecules";
import Input from "./src/components/atoms/Input/Base";
import styled from "styled-components/native";
import BottomTabMenu from "./src/components/molecules/BottomTabMenu";
const StyledViewTest = styled.View`
  padding: 20px;
  width: 100%;
`;

const user = {
  nickName: "Revolver Moose",
};

export default function App() {
  return (
    <StyledViewTest>
      <Typography.Title style={{ fontSize: 32 }}>
        {user.nickName}'s MB
      </Typography.Title>

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
      {/* 
      <Container.AbsoluteCard>
        <Input.Base>fhuefhie</Input.Base>
      </Container.AbsoluteCard> */}

      <ActionCategoryMenu
        onMenuChange={(arg) => {
          setMenu(arg);
        }}
        configs={[
          {
            displayName: "Human Resources",
            slug: "human-resources",
            iconName: "child",
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
        onMenuChange={(arg) => {
          setMenu(arg);
        }}
        configs={[
          {
            displayName: "Home",
            slug: "home",
            iconName: "home",
          },
        ]}
      ></BottomTabMenu>
      <StatusBar style="auto" />
    </StyledViewTest>
  );
}
