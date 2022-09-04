import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';


const Header=()=>{
    return(
       <View style={styles.header}>
            <View style={styles.logoBox} >
                <TouchableOpacity>
                    <Image source={require('./../images/header-logo.png')} style={styles.logoImage} ></Image>
                </TouchableOpacity>
                
            </View>

            <View style={styles.otherImage}> 
                
                    <TouchableOpacity style={styles.ButtonBox} >
                        <Image source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}} style={styles.otherButton} ></Image>
                    </TouchableOpacity>
               
               
                    <TouchableOpacity style={styles.ButtonBox} >
                        <Image source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}} style={styles.otherButton} ></Image>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={styles.ButtonBox} >
                        <View style={styles.messageBatchBox} >
                            <Text style={styles.messageBatchText} >11</Text>
                        </View>
                        <Image source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}} style={styles.otherButton} ></Image>
                    </TouchableOpacity>
            </View>
       </View>
    )
}

const styles=StyleSheet.create({
    header:{
       
        height:'8%',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        // borderColor:"green",
        // borderWidth:1
        
    },
    logoBox:{
        width:'60%', 
        height:'100%',
        display:'flex',
        flex:1,
        justifyContent:'center',
        // alignItems:'center'
        // borderColor:"green",
        // borderWidth:1
        
        
        
    },
    logoImage:{
       
        height:'82%',
        width:'55%',
        marginTop:3
        
    },
    otherImage:{
        
        width:'30%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginRight:40,
        // borderColor:"blue",
        // borderWidth:1
        
    },
    
    ButtonBox:{
        height:'70%',
        width:'50%',
        // borderColor:"yellow",
        // borderWidth:1
    },

    otherButton:{
        height:'70%',
        width:'50%',
        padding: 10
    },
    messageBatchBox:{
        backgroundColor:'red',
        position:'absolute',
        zIndex:1000,
        bottom:28,
        left:10,
        width:'45%',
        borderRadius:20
    },
    messageBatchText:{
        color:'white',
        textAlign:'center',
    }
})
export default Header;