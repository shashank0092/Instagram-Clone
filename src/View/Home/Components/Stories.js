import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import {user} from '../../../Data/user.js'

const Stories=()=>{

    return(
        <View style={styles.stories} >
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            
            >
                {
                    user.map((data,index)=>{
                        return(
                            <View key={index}  >
                                <TouchableOpacity>
                                <View  style={styles.imagesView} >
                                    <Image source={{uri:data.image}} style={styles.images} ></Image>
                                </View>
                                </TouchableOpacity>
                              
                                
                                <View style={styles.textView}   > 
                                    <Text style={styles.text} >
                                        {
                                            data.user.length>9?(data.user.slice(0,6).toLowerCase()+"..."):
                                            (data.user)
                                        }
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }

            </ScrollView> 
        </View>
    )
}

const styles=StyleSheet.create({

    stories: {
    //    borderColor:"red",
    //    borderWidth:1
        // backgroundColor:'white'
    },

    imagesView:{
        
       
        marginHorizontal:8,
        borderradius:100,
      
        
    },

    images:{
       height:60,
       width:60,
       borderWidth:1,
       borderColor:"#ff8501",
       borderRadius:50
       
    },  

    textView:{

    },

    text:{
        color:'white',
        textAlign:'center'
    },
    
})

export default Stories;