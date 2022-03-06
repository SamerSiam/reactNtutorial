import React, {FC, useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {Input, Button,} from '../components'

 const App: FC =()=>{
     const [name, setName]= useState<string |null>(null)
     const [email, setEmail]= useState<string |null>(null)
     const [password, setPassword]= useState<string |null>(null)
    return (
        <View style={styles.container}>
            <Text> Sign up Screen</Text>
            <Input placeholder="Name" onChangeText={(text)=>setName(text)}  />
            <Input placeholder="Email" onChangeText={(text)=>setEmail(text)} /> 
            <Input placeholder="Password" secureTextEntry onChangeText={(text)=>setPassword(text)}  />
            <Button title='Sign Up' onPress={()=>alert('Pressed')}/>
       <View style={styles.loginText}> 
           <Text>
               Already Have and Account? </Text>
           <TouchableOpacity>
           <Text> Login Here</Text>
           </TouchableOpacity>
        </View>
        </View>
    )
}

export default App;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText:{
        flexDirection: 'row',
        marginVertical:20,
    }
})