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
          <Button.Tab
            key={i}
            style={{ display: "flex", padding: 5, alignItems: "center" }}
          >
            <Icon.Base
              iconName={config.iconName}
              iconSize={config.iconSize}
              iconColor={config.iconColor}
            ></Icon.Base>
            <Typography.Title>{config.displayName}</Typography.Title>
          </Button.Tab>
        );
      })}
    </Container.Menu>
  );
};

export default BottomTabMenu;
