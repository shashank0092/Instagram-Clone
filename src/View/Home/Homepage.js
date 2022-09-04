import React from 'react';
import {View,StyleSheet} from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Post from './Components/Post';
import Stories from './Components/Stories';
const Homepage=()=>{
    return(
        <View style={styles.homepage} >
            <Header/>
            <Stories/>
            <Post />
            <Footer />
        </View>
    )
}

const styles=StyleSheet.create({
    homepage:{
        height:"100%",
        width:'100%'
        
    }
})

export default Homepage;