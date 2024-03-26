import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Tasks from '../../components/Tasks'

const Home = () => {
  return (
    <View style={styles.taskView}>
      <Text style={styles.mainheading}>TODO APP</Text>
      <Tasks/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    taskView  :{
        flex : 1,
        width : 200 
    },
    mainheading : {
        fontSize : 10,
        // fontWeight : 500
    }
})