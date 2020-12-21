import React, {useContext} from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';


const EditScreen = ({navigation}) => {
    const {state, editBlogPost} = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return <BlogPostForm
        onSubmit = {(title, content) => {
            editBlogPost(navigation.getParam('id'), title, content, ()=>navigation.pop())
        }}
        initialValues={{title:blogPost.title, content: blogPost.content}}
        mainTitle= {'Edit'}
    />

   
}

export default EditScreen

const styles = StyleSheet.create({})
3