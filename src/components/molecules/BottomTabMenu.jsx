import { Link } from "expo-router";
import { Container, Typography, Button, Icon } from "../atoms";

const BottomTabMenu = ({ configs, onMenuChange = (arg) => {} }) => {
  console.log(configs);
  return (
    <Container.Menu
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 26,
        backgroundColor: "red",
      }}
    >
      {configs.map((config, i) => {
        return (
          <Link href={config.slug} key={i} asChild>
            <Button.Tab
              style={{ display: "flex", padding: 5, alignItems: "center" }}
            >
              <Icon.Base
                iconName={config.iconName}
                iconSize={config.iconSize}
                iconColor={config.iconColor}
              ></Icon.Base>
              <Typography.Paragraph
                style={{
                  color: config.iconColor,
                  fontFamily: "redensek",
                  fontSize: "20",
                }}
              >
                {config.displayName}
              </Typography.Paragraph>
            </Button.Tab>
          </Link>
        );
      })}
    </Container.Menu>
  );
};

export default BottomTabMenu;
