import { Modal, Button, View, Text, StyleSheet } from 'react-native';

const ModalItem = ({ modalVisible, selectedItem, closeModal, deleteItem }) => {
  return (
    <Modal
      style={styles.modal}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.modal}>
        <Text style={styles.title}>Eliminar item</Text>
        <Text style={styles.item}>&#127919; {selectedItem.value}</Text>

        <View style={styles.buttons}>
          <Button title="cerrar" color="#9b9b9b" onPress={closeModal} />
          <Button title="confirmar" onPress={deleteItem} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFF',
    borderRadius: 20,
    borderWidth: 1
  },
  title: {
      fontWeight: 'bold',
      fontSize: 20
  },
  item: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 20
  },
  buttons: {
      width: '60%',
      flexDirection: 'row',
      justifyContent: "space-between"
  }
});

export default ModalItem;