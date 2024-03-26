import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import AddModal from './AddModal';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Tasks = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
        <View style={styles.headingGrp}>

      <View style={styles.heading}>
        <Text>Tasks Lists</Text>
      </View>

      <View style={styles.AddBtn}>
        <TouchableOpacity onPress={() => setTaskOpen(true)}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
        </View>

      <View>
        <Text style={styles.listheading}>List of tasks here</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(item, index) => index.toString()} // Use index as key for now
        />
      </View>

      <AddModal
        taskOpen={taskOpen}
        setTaskOpen={setTaskOpen}
        data={data}
        setData={setData}
      />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    paddingHorizontal: 10,
    width : "100%"
  },
  heading: {
    fontWeight: '500',
    fontSize: 12,
    borderBottomColor : "2px solid red"
  },
  listheading: {
    fontWeight: '500',
    fontSize: 12,
  },
  AddBtn: {
    fontWeight: '500',
    fontSize: 12,
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color : "black"
  },
  title: {
    fontSize: 16,
  },
  headingGrp : {
  flexDirection : "row",
  alignItems : "center",
  justifyContent : "space-between",
  width : 400
  }
});
