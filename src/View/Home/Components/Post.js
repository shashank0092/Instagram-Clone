import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity,Image} from 'react-native';

const post=({post})=>{
    
    return(
        <>
            <View style={PostStyle.main_box} >
                <View style={PostStyle.line} />
                <PostHeader post={post} />
                <PostImage post={post} />
                <PostIcon  />
                <PostLike post={post} />
                <PostCaption post={post} />
                <PostComment post={post} />
            </View>
            
        </>
    )
}

const PostHeader=({post})=>{
    return(
        <>
            <View style={PostHeaderStyle.main_box} >
                <View style={PostHeaderStyle.image_box} >
                    <TouchableOpacity>
                        <Image  
                            source={{uri:post.profile_picture}}
                            style={PostHeaderStyle.profile_picture}
                        />
                    </TouchableOpacity>
                </View>

                <View style={PostHeaderStyle.username_box} >
                    <TouchableOpacity>
                        <Text style={PostHeaderStyle.text} >
                            {post.user}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={PostHeaderStyle.button_box} >
                        <TouchableOpacity>
                            <Text style={PostHeaderStyle.text} >
                                ...
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
        </>
    )
}



const PostImage=({post})=>{
    return(
        <>
            <View style={PostImageStyle.main_box} >
                <Image
                    source={{uri:post.imageurl}}
                    style={PostImageStyle.image}
                />
            </View>
        </>
    )
}


const PostIcon=()=>{
   return(
    <View style={PostIconStyle.main_box} >
            <View style={PostIconStyle.like_box}  >
                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/heart.png')}
                        style={PostIconStyle.comment_image}
                    />
                </TouchableOpacity>
            </View>


            
            <View style={PostIconStyle.comment_box} >
                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/bubble-chat.png')}
                        style={PostIconStyle.comment_image}
                    />
                </TouchableOpacity>
            </View>



            <View style={PostIconStyle.send_box} >
            <TouchableOpacity style={PostIconStyle.send_image} >
                    <Image
                        source={require('../../../assets/send.png')}
                        style={PostIconStyle.comment_image}
                    />
                </TouchableOpacity>
            </View>


            <View style={PostIconStyle.save_box}>
            <TouchableOpacity>
                    <Image
                        source={require('../../../assets/save-instagram.png')}
                        style={PostIconStyle.comment_image}
                    />
                </TouchableOpacity>
            </View>
</View>
   )
}


const PostLike=({post})=>{
    return(
        <>

            <View style={PostLikeStyle.main_box} >
                <Text style={PostLikeStyle.text} >
                    {post.likes} likes
                </Text>
            </View>

        </>
    )
}


const PostCaption=({post})=>{
    return(
        <>
            <View style={PostCaptionStyle.main_box} >
                <Text style={PostCaptionStyle.main_text_box} >
                    <Text style={PostCaptionStyle.caption_user}  >{post.user}</Text>
                    <Text style={PostCaptionStyle.caption} > {post.caption}</Text>
                </Text>
            </View>
        </>
    )
}

const PostComment=({post})=>{
    return(
        
        <>
            <View style={PostCommentStyle.main_box} >
                <View style={PostCommentStyle.main_text_box} >
               {
                !!post.comments.length &&(
                    <TouchableOpacity>
                            <Text style={PostCommentStyle.main_text} >
                                View {post.comments.length>1?'All':undefined} {post.comments.length} {post.comments.length>1?'Comments':'Comment'}...
                            </Text>
                    </TouchableOpacity>
                )
               }
               </View>

               <View style={PostCommentStyle.main_comment_box} >
                {
                    post.comments.map((item, index)=>{
                        return(
                            <View key={index}  >
                                <Text>
                                    <Text style={PostCommentStyle.user} >{item.user}</Text>
                                    <Text style={PostCommentStyle.comment}> {item.comments}</Text>
                                </Text>
                                
                            </View>
                        )
                        
                    })
                }
               </View>
            </View>
        </>

    )
}


// ----------------------------------------------------------------STYLING PORTION------------------------------------------------------

const PostStyle =StyleSheet.create({
    line:{
        height: 1,
        backgroundColor: 'white',
        alignSelf: 'stretch'
    }
    ,
    text:{
        color:'red'
    }
    ,
    main_box: {

    }
})

const PostHeaderStyle=StyleSheet.create({
    main_box:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',


    },
    profile_picture:{
        height:40,
        width:40,
        borderColor:'#ff8501',
        borderWidth:1,
        borderRadius:50,
        marginVertical:5,
    },

    image_box:{
        paddingHorizontal:5
    },
    
    username_box:{
        flexGrow:1,
        paddingHorizontal:10
    },
    text:{
        color:'white',
        fontWeight:"600"
    },
    button_box:{
        paddingHorizontal:10
    }
})

const PostImageStyle=StyleSheet.create({
    main_box:{
        height:350 ,
        boxSizing:'border-box'


    },
    image:{
        height:'100%'
    }
})

const PostIconStyle=StyleSheet.create({
    main_box:{
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:1,
       marginVertical:5

    },

    like_box:{
        paddingHorizontal:5
    },
    comment_box:{
        paddingHorizontal:10,
        
    },
    send_box:{
        paddingHorizontal:10,
        flexGrow:1
    },
    comment_image:{
        height:25,
        width:25
    },
    send_image:{
       
        width:'12%'
    }
})

const PostLikeStyle=StyleSheet.create({

    main_box:{
        
    },

    text:{
        color:'white',
        fontWeight:'500',
        marginVertical:2,
        paddingHorizontal:10

    }
})

const PostCaptionStyle=StyleSheet.create({
    main_box:{  
        paddingHorizontal:10,
        paddingVertical:2
    },
    caption_user:{
        fontWeight:'900',
        color:'white',
        marginEnd:10
    },
    
})

const PostCommentStyle=StyleSheet.create({
    main_box:{ 
        paddingHorizontal:10,
        marginBottom:10,
       
    },
    main_text:{
        color:'grey',
        fontWeight:'600'
    },
    main_comment_box:{
        marginVertical:2
    },
    user:{
        color:'bold',
        fontWeight:'900',
    }

   
})

export default post;