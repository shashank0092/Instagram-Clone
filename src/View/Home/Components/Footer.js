import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Footer=()=>{
    return(
        <View >
            <Text style={styles.text} >
                This is Footer
            </Text>
        </View>
    )
}


const styles=StyleSheet.create({
    text:{
        color:'white'
    }
})
export default Footer;