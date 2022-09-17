import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { useState } from 'react';

const Footer=({icons})=>{
    
    const [activeTab,setactiveTab]=useState('home')
    return(
    <>
    <View style={FooterStyle.line} />
        <View  style={FooterStyle.main_box} >
           {
                icons.map((icon,index)=>{
                    {console.log(icon)}
                    return(
                        
                        <TouchableOpacity key={index} onPress={()=>{setactiveTab(icon.name)}} >
                           
                            <Image
                                source={{uri:activeTab===icon.name?icon.active:icon.inactive}}
                                style={[FooterStyle.footer_image,icon.name==='Profile'?FooterStyle.profile_picture:null]}
                            />
                        </TouchableOpacity>
                    )
                })
           }
        </View>
    </>
    )
}


const FooterStyle=StyleSheet.create({
    line:{
        height: 1,
        backgroundColor: 'white',
        alignSelf: 'stretch'
    },
    main_box:{
       
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        height:50
    },

    footer_image:{
        height:30,
        width:30
    }

    ,profile_picture:{
        borderRadius:20,
        borderWidth:1,
        borderColor:'white'
    }
})
export default Footer;