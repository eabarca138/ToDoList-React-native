import {View, FlatList, Text, Button, StyleSheet } from 'react-native';

const List = ({ itemList, openModal }) => {

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>
      &#127919; - {item.value}
      </Text>

      <Button
        onPress={openModal.bind(this, item)}
        style={styles.button}
        title="Eliminar"
        color="#FF0000"
        accessibilityLabel="Eliminar"
      />
    </View>
  );
  return (
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  itemText: {
    flex: 2,
    fontSize: 17,
    marginRight: 20,
  },
  button: {
    flex: 1,
    width: 10,
  },
});
  

export default List;