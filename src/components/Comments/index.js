import React, { createRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";

export default function Comments() {
  const modalizeRef = createRef();
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef} alwaysOpen={85} handlePosition="inside">
        <Text>ffsdfsdfsfd</Text>
      </Modalize>
    </>
  );
}
