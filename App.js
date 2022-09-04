import React from 'react';
import {View,SafeAreaView} from 'react-native'
import {StyleSheet} from 'react-native'
import Homepage from './src/View/Home/Homepage';

const App=()=>{
  return(
      <SafeAreaView style={styles.mainbox} >
        <Homepage/>
      </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  mainbox: {
    backgroundColor:"black",
    // height: "100%",
    flex:1,
    color: "white",
    borderColor:'red',
    borderWidth: 1,
  }
})

export default App;