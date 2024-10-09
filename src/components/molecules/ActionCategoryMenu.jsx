import { Container, Typography, Button } from "../atoms";

const ActionCategoryMenu = ({ configs, onMenuChange = (arg) => {} }) => {
  console.log(configs);
  return (
    <Container.Menu>
      {configs.map((config, i) => {
        return <Button.Base key={i}>{config.displayName}</Button.Base>;
      })}
    </Container.Menu>
  );
};

export default ActionCategoryMenu;
