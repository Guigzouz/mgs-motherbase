import { Link } from "expo-router";
import { Container, Typography, Button, Icon } from "../atoms";

const LogsMenu = ({ configs }) => {
  console.log(configs);
  return (
    <Container.Menu>
      {configs.map((config, i) => {
        return (
          <Link href={config.slug} key={i} asChild>
            <Button.Base key={i}>
              <Icon.Base
                iconName={config.iconName}
                iconSize={config.iconSize}
                iconColor={config.iconColor}
              ></Icon.Base>
            </Button.Base>
          </Link>
        );
      })}
    </Container.Menu>
  );
};

export default LogsMenu;
