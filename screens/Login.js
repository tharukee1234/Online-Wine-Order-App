import React, { useState } from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,
  Alert
} from 'react-native';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/BackGround/login2.jpg')}
      >
        <View style={styles.contentCenter}>
          <Image
            source={{
              // ...
            }}
            style={{
              width: 90,
              height: 90,
              marginTop: 50,
              marginBottom: 50,
              opacity: 0.3
            }}
          />
        </View>
        <View>
          <Image
           style={styles.logo}
           source={require('../assets/BackGround/logo.png')}
           
           />
         </View>

        <View style={styles.paddingContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            onChangeText={text => setUsername(text)}
            value={username}
            returnKeyType="next"
          ></TextInput>

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            returnKeyType="next"
          ></TextInput>

          <Text style={styles.textStyle}>WELCOME TO</Text>
          <Text style={styles.textStyle1}>ST WINE STORE</Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              if (username === 'Supun' && password === '123') {
                Alert.alert('Successfully logged in!');
                navigation.navigate('List');
                setUsername('');
                setPassword('');
                
              } else {
                Alert.alert('Incorrect username or password');
              }
            }}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={styles.ortext}>OR</Text>

          <TouchableOpacity
            style={styles.signUpButtonContainer}
            onPress={() => {
              navigation.navigate('signup');
            }}
          >
            <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles=StyleSheet.create({

  container:{
    flex:1

  },
  paddingContainer :
  {
    padding :20
    
  },
  contentCenter:{

   justifyContent:'center',
    alignItems:'center',
    
  },

  textStyle:{


    position:'absolute',
    top:-300,
    left:150,
    fontWeight:'bold',
    fontSize:30,
    color:'yellow',
    textAlign:'center',
    flexDirection:'row'
  
  },

  textStyle1:{

    position:'absolute',
    fontWeight:'bold',
    top:-260,
    left:150,
    fontSize:20,
    color:'red'


  },

 
  input:{
    height : 40,
    backgroundColor:'rgba(255,255,255,0.8)',
    color :'black',
    marginBottom:20,
    fontSize:20,
    paddingHorizontal:20,
    borderRadius:5,
    bottom:120
    
  },
  buttonContainer :{
    backgroundColor:'brown',
    paddingVertical:15,
    borderColor:"chocolate",
    borderWidth:2,
    borderRadius:30,
    bottom:100
    
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
  },

  signUpButtonContainer:{

    backgroundColor:'chocolate',
    paddingVertical:15,
    shadowColor:"red",
    borderRadius:30,
     bottom:80,
    width:90,
    height:45,
    left:126

  },

  signUpButtonText:{

    textAlign:'center',
    color:'#FFFFFF',
  },

  ortext:{

    bottom:90,
    left:160,
    color:'white',
    fontWeight:'bold',
  },
  logo:{
    width:150,
    height:150,
    bottom:200
  }

  
});
export default LoginScreen;