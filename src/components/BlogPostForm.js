import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const BlogPostForm = ({onSubmit, initialValues, mainTitle}) => {
    const [title, settitle] = useState(initialValues.title);
    const [content, setcontent] = useState(initialValues.content)

    return (
        <View>
            <Text style={ styles.title }>{mainTitle} Blog Post</Text>

            <TextInput
                style={styles.input}
                value={title}
                onChangeText = {text => settitle(text)}
                placeholder ='Title'
            />

            <TextInput
                style={styles.input}
                value={content}
                onChangeText={text => setcontent(text)}
                placeholder =  'Content'
            />

            <Button
            onPress = {() => onSubmit(title, content)}
            title="Save"/>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues :{title: '', content: ''}
}

export default BlogPostForm

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        alignSelf: 'center'
    },
    input:{
        fontSize: 18, 
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 3
    }
})
