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
    
    flex:1,
    color: "white",
   
  }
})

export default App;