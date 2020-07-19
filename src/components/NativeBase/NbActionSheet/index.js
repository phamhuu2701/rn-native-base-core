import React, { useState } from "react";
import { Container, Content, Button, Text, ActionSheet } from "native-base";
import UserHeader from "../../../common/UserHeader";

const BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

function NbActionSheet(props) {
  const [value, setValue] = useState(null);

  console.log("value :>> ", value);

  const renderActionSheet = () => {
    return ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: "Testing ActionSheet",
      },
      (buttonIndex) => setValue(buttonIndex)
    );
  };

  return (
    <Container>
      <UserHeader {...props} title={props.route.name} />

      <Content padder>
        <Button onPress={renderActionSheet}>
          <Text>ActionSheet</Text>
        </Button>
      </Content>
    </Container>
  );
}

export default NbActionSheet;
