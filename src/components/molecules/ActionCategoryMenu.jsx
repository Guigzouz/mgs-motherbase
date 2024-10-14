import { Container, Typography, Button, Icon } from "../atoms";

const ActionCategoryMenu = ({ configs, onMenuChange = (arg) => {} }) => {
  console.log(configs);
  return (
    <Container.Menu style={{ gap: 15 }}>
      {configs.map((config, i) => {
        return (
          <Button.Base key={i}>
            <Typography.Paragraph
              style={{ fontFamily: "redensek", fontSize: "20" }}
            >
              {config.displayName}
            </Typography.Paragraph>
            <Icon.Base
              iconName={config.iconName}
              iconSize={config.iconSize}
              iconColor={config.iconColor}
            ></Icon.Base>
          </Button.Base>
        );
      })}
    </Container.Menu>
  );
};

export default ActionCategoryMenu;
