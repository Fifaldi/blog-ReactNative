import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const IndexScreen = ({navigation}) => {
    const { state, deleteBlogPost, getBlogPosts }= useContext(Context);

useEffect(()=>{
    getBlogPosts()

    const listener = navigation.addListener('didFocus', ()=>{getBlogPosts()});
    return () => {
        listener.remove()
    }
}, [])


    return (
        <View>
            <FlatList
                data = {state}
                keyExtractor = {blogPost=>blogPost.title}
                renderItem = {({item}) => {
                    return <View style={styles.row}>
                        <TouchableOpacity onPress = {()=> navigation.navigate('Show', {id:item.id})}>
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style ={ styles.icon } name='trash-2'/>
                        </TouchableOpacity>
                    </View>
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
   return { 
       headerRight: () => (
    <TouchableOpacity onPress = { () => navigation.navigate('Create')}> 
        <Feather name ="plus" size={30}/>
    </TouchableOpacity>
   )}
}

export default IndexScreen

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15, 
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18,
    
    },
    icon: {
        fontSize: 24
    },

})
