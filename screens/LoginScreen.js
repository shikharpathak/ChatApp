import React,{useState} from "react";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import {auth} from '../firebase';
// import {StatusBar} from 'expo-status-bar';
function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
     const unsubscribe= auth.onAuthStateChanged((authUser)=>{
          if(authUser){
              navigation.replace('Home')
          }
      })
      return unsubscribe;
  },[])
  const signIn = () =>{
      auth
      .signInWithEmailAndPassword(email,password)
      .catch(error=>alert(error))
  }
  return (
    <KeyboardAvoidingView behaviour='padding' enabled style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          type="Email"
          autoFocus
          name="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          id="email"
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          onSubmitEditing={signIn}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
      <Button onPress={()=>navigation.navigate('Register')} containerStyle={styles.button} type='outline' title="Register"/>
      <View style={{height:100}}/>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        padding:10,
        backgroundColor:"white",
    }
    ,
  inputContainer: {},
  button:{
      width:200,
      marginTop:10,
  }

});
