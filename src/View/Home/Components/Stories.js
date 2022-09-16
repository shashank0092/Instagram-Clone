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


    imagesView:{
        marginHorizontal:8,
        borderradius:100,
    },

    images:{
       height:60,
       width:60,
       borderWidth:2,
       borderColor:"#ff8501",
       borderRadius:50
       
    },  

    textView:{
        marginVertical:10
    },

    text:{
        color:'white',
        textAlign:'center',
        fontWeight:'300',
        
    },
    
})

export default Stories;