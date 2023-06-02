import React, { useState } from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert,
} from 'react-native';

function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSignUp = () => {
    if (!username || !address || !age || !password) {
      Alert.alert('Please fill  all the fields');

    } else {
      
      const uage = parseInt(age);

      if (uage <= 18) {
        Alert.alert('Sorry, Your age is not more than 18. Thank you.');
      } else {
        Alert.alert('Congratulations! Registration is successful!!');
        navigation.navigate('Login');
        
        setUsername('');
        setAddress('');
        setAge('');
        setPassword('');
        
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1}}
        source={require('../assets/BackGround/sig1.jpg')}>
        <View style={styles.contentCenter}>
          <Image
            source={{
              // Add your image source here
            }}
            style={{
              width: 50,
              height: 90,
              marginTop: 10,
              marginBottom: 60,
            }}
          />
        </View>

        <View style={styles.paddingContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setText => setUsername(setText)}
            defaultValue={username}
            returnKeyType="next"
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            onChangeText={setText => setAddress(setText)}
            defaultValue={address}
            returnKeyType="next"
          />

          <TextInput
            style={styles.input}
            placeholder="Age"
            onChangeText={setText => setAge(setText)}
            defaultValue={age}
            returnKeyType="next"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={setText => setPassword(setText)}
            defaultValue={password}
            returnKeyType="next"
          />

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>

          

          <Text style={styles.textStyle}>Register For Ultimate Experience</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009387',
    flex: 1,
    
  },
  paddingContainer: {
    padding: 50,
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    position: 'absolute',
    top: -138,
    left: 80,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    flexDirection: 'row',
    
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 20,
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius:6,
    bottom:50
  },
  buttonContainer: {
    backgroundColor: 'brown',
    paddingVertical: 15,
    borderColor:'black',
    borderWidth:2,
    borderRadius:25
    
  },
  buttonText: {
    textAlign: 'center',
    color:'#FFFFFF',
  }
});

export default SignupScreen;