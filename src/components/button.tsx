import React, {FC} from 'react';
import {Dimensions,View, StyleSheet, Text} from 'react-native'
import {TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const{height, width}= Dimensions.get('screen')
interface Props{
    title:string;
    onPress:()=>void;
    
}
const App: FC <Props> =(props)=>{
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}
 export default App;
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#000',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius:8,
        padding:10,

    },
    text:{
        color:'#fff',
    }
})