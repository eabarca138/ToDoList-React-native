import { useState } from 'react';
import AddItem from './components/AddItem'
import List from './components/List'
import ModalItem from './components/Modal'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [itemList, setItemList] = useState([])
  const [selectedItem, setSelectedItem] = useState([])
  const [modalVisible, setModalVisible] = useState(false);

  const addItem = (item) => {
    if (item.value !== "") {
      setItemList([...itemList, item]);
    }
    return
  };

  const openModal = (item, e) => {
    setModalVisible(!modalVisible);
    setSelectedItem(item)
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  }
  
  const deleteItem = () => {
    setModalVisible(!modalVisible);
    setItemList(itemList.filter((item) => item.id !== selectedItem.id))
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <AddItem addItem={addItem}/>
        <StatusBar style="auto" />
        <List itemList={itemList} openModal={openModal}/>

        <ModalItem modalVisible={modalVisible} closeModal={closeModal} deleteItem={deleteItem} selectedItem={selectedItem}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#00FFFF",
  },
  container: {
    flex: 1,
    marginTop: 100,
    width:'90%',
    justifyContent: 'center'
  },
});
