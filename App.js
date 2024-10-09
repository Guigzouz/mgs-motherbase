import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Typography } from "./src/components/atoms";
import { Container } from "./src/components/atoms";
import { ActionCategoryMenu } from "./src/components/molecules";

export default function App() {
  return (
    <View>
      <Container.Card>
        <Typography.Title>Big Titre</Typography.Title>
      </Container.Card>

      <ActionCategoryMenu
        onMenuChange={(arg) => {
          setMenu(arg);
        }}
        configs={[
          { displayName: "Human Resources", slug: "human-resources" },
          { displayName: "R&D", slug: "reasearch-and-devlopment" },
          { displayName: "External OPS", slug: "external-operations" },
        ]}
      ></ActionCategoryMenu>
      <StatusBar style="auto" />
    </View>
  );
}
