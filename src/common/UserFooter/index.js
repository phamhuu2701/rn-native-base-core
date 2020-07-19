import React from "react";
import { Footer, Icon, Text } from "native-base";
import { Colors, Styles } from "../../static/Theme";
import { TouchableOpacity } from "react-native";

function UserFooter({ navigation, route }) {
  const tabs = [
    {
      name: "Apps",
      iconName: "md-apps",
      screen: "",
    },
    {
      name: "Apps",
      iconName: "md-apps",
      screen: "",
    },
    {
      name: "Apps",
      iconName: "md-apps",
      screen: "",
    },
    {
      name: "Apps",
      iconName: "md-apps",
      screen: "",
    },
    {
      name: "Apps",
      iconName: "md-apps",
      screen: "",
    },
  ];

  return (
    <Footer style={{ backgroundColor: Colors.bgContainer }}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          transparent
          vertical
          style={[
            Styles.container,
            Styles.blockCenterItems,
            Styles.paddingHorizontalSmall,
          ]}
        >
          <Icon name={tab.iconName} style={{ color: Colors.note }} />
          <Text numberOfLines={1} style={Styles.note}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </Footer>
  );
}

export default UserFooter;
