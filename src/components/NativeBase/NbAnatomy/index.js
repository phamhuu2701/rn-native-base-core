import React from "react";
import { Container, Content, Text } from "native-base";
import UserHeader from "../../../common/UserHeader";
import UserFooter from "../../../common/UserFooter";

function NbAnatomy(props) {
  return (
    <Container>
      <UserHeader {...props} title={props.route.name} />

      <Content padder>
        <Text>Welcome native base</Text>
      </Content>

      <UserFooter {...props} />
    </Container>
  );
}

export default NbAnatomy;
