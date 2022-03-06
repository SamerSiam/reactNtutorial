import React, {FC} from 'react';
import {Dimensions,View, StyleSheet} from 'react-native'
import {TextInput} from 'react-native'

const{height, width}= Dimensions.get('screen')
interface Props{
    placeholder:string;
    onChangeText:(text:string)=>void;
    secureTextEntry?:boolean;
}


const Input : FC <Props>=(props)=>{
    return(
        <View style={styles.constainer}>
          <TextInput style={styles.input} placeholder={props.placeholder} onChangeText={props.onChangeText} 
          secureTextEntry={props.secureTextEntry || false}/>
        </View>
    )
}
export default Input;
const styles=StyleSheet.create({
    constainer:{
        width: width/1.1,
        alignSelf: 'center',
        backgroundColor:'#e3e3e3',
        borderRadius:5,
        marginVertical:10,
    },
    input:{
        padding:15
    }
})