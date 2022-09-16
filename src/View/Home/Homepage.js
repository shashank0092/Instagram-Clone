import React from 'react';
import {View,StyleSheet,ScrollView} from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Post from './Components/Post';
import Stories from './Components/Stories';
import {POSTS} from '../../Data/data';
const Homepage=()=>{
    
    return(
        <View style={styles.homepage} >
            <Header/>
            <Stories/>
            <ScrollView>
                {
                    POSTS.map((post,index)=>{
                        return(
                            <Post  post={post} key={index} />
                        )
                        
                    })
                }
               
            </ScrollView>
            
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