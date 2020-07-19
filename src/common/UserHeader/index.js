import React from "react";
import { Header, View, Button, Icon, Title } from "native-base";
import { Colors, Styles } from "../../static/Theme";

function UserHeader({
  navigation,
  title,
  hideLeft,
  leftIconName,
  leftAction,
  hideRight,
  rightIconName,
  rightAction,
}) {
  return (
    <Header
      style={[
        Styles.blockRowSpaceBetweenContent,
        { backgroundColor: Colors.primary, alignItems: "stretch" },
      ]}
    >
      <View
        style={{
          width: 60,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {!hideLeft && (
          <Button
            transparent
            onPress={() => leftAction?.() || navigation?.goBack?.() || null}
          >
            <Icon
              name={leftIconName || "ios-arrow-back"}
              style={{ color: Colors.white }}
            />
          </Button>
        )}
      </View>
      <View style={[Styles.container, Styles.blockCenterItems]}>
        <Title style={[Styles.title, { color: Colors.white }]}>{title}</Title>
      </View>
      <View
        style={{
          width: 60,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        {!hideRight && (
          <Button transparent onPress={() => rightAction?.() || null}>
            <Icon
              name={rightIconName || "md-more"}
              style={{ color: Colors.white }}
            />
          </Button>
        )}
      </View>
    </Header>
  );
}

export default UserHeader;
