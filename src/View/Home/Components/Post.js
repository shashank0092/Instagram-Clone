import React from 'react';
import {View,Text,StyleSheet,Divider} from 'react-native';


const Post=()=>{
    return(
        <View>
            <Divider width={1} vertical />
            <Text style={styles.text} >
                This is post
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        color:'white'
    }
})

export default Post;