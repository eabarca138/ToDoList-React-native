import { useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

const AddItem = ({ addItem }) => {
  const [textItem, setTextItem] = useState('');
  const [count, setCount] = useState(0)
  const onHandlerChangeItem = item => setTextItem(item);

  const onHandlerAddItem = () => {
    setCount(count + 1);
    addItem({ value: textItem, id: count });
    setTextItem("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Ingrese un item."
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />

      <Button
        onPress={onHandlerAddItem}
        title="Agregar"
        color="#00BB2D"
        accessibilityLabel="Agregar"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: 220,
    paddingLeft: 10,
    borderBottomWidth: 1,
  },
});

export default AddItem