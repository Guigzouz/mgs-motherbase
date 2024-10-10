import Icon from "react-native-vector-icons/FontAwesome5";

const Base = ({ iconName, iconSize = 18, iconColor = "#000000" }) => {
  return <Icon name={iconName} size={iconSize} color={iconColor} />;
};

export default Base;
