import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const AddModal = ({taskOpen , setTaskOpen ,data, setData}) => {

    const [currentTask , setCurrentTask] = useState("")

    const handleOnChange = (e)=>{
        e.preventDefault()
        setCurrentTask(e.target.value)
    }
 
    const handleAddTasks = ()=>{
        setTaskOpen((prev)=>!prev)
        setData([...data , currentTask])
    }

  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={taskOpen}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.modalView}>
          <Text style={[styles.colors, styles.buttonColor]}>AddModal</Text>
          <TextInput
            type="text"
            placeholder="Write Your Task Now"
            value={currentTask}
            onChange={handleOnChange}
            style={styles.textInp}
          />
          <View style={styles.btnDiv}>
            <TouchableOpacity onPress={handleAddTasks}>
              <Text style={[styles.buttonColor, styles.colors]}>Add Task</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddTasks}>
              <Text style={[styles.buttonColor, styles.colors]}>
                Close Modal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AddModal


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    color: 'black',
  },
  modalView: {
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height : 400
  },
  colors: {
    color: 'red',
    fontSize: 10,
    fontWeight: 200,
  },
  buttonColor: {
    color: 'black',
    backgroundColor: 'orange',
    fontSize: 10,
    fontWeight: 200,
    borderRadius: 10,
  },
  btnDiv: {
    flexDirection: 'row',
    maxWidth: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInp : {
    color : "black",
    borderRadius : 20
  }
});