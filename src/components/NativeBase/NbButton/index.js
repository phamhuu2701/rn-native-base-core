import React from "react";
import { Container, Content, Button, Text } from "native-base";
import UserHeader from "../../../common/UserHeader";
import { Styles, Colors } from "../../../static/Theme";

function NbButton(props) {
  return (
    <Container>
      <UserHeader {...props} title={props.route.name} />

      <Content padder>
        <Button
          style={Styles.marginBottom}
          onPress={() => console.log("onPress")}
        >
          <Text>Press me!!</Text>
        </Button>
        <Button
          style={Styles.marginBottom}
          onPress={() => console.log("onPress")}
          block
        >
          <Text>Press me!!</Text>
        </Button>
        <Button
          style={Styles.marginBottom}
          onPress={() => console.log("onPress")}
          transparent
        >
          <Text>Press me!!</Text>
        </Button>
        <Button
          style={Styles.marginBottom}
          onPress={() => console.log("onPress")}
          disabled
        >
          <Text>disabled !!</Text>
        </Button>
      </Content>
    </Container>
  );
}

export default NbButton;
