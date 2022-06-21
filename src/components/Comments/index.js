import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { useContext, useEffect, useRef } from "react";
import { Modalize } from "react-native-modalize";

export default function Comments({ ModalizeRef }) {
  const modalizeRef = useRef<Modalize> null;

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>
      <Modalize ref={ModalizeRef}>...your content</Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009393",
  },
});
