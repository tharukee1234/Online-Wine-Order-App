import React, { useState } from 'react';
import {
StyleSheet, View,SafeAreaView,Button,ImageBackground,TouchableOpacity,Text,Image,Dimensions,ScrollView} from 'react-native';

const RedWinePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/Rum/back.jpg')}>
        <View style={styles.container}>

          <ScrollView>
            <Text style={styles.headerText}> Bayou XO Rum {'\n'}Mardi Gras </Text>
            <Text style={styles.price}> Rs 100000.00 </Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('BAYOU'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/Rum/1.png')} style={styles.imageleft}/>
              
            </TouchableOpacity>

            <Text style={styles.headerText}>Angostura 7 Year{'\n'} Old Caribbean</Text>
            <Text style={styles.price}>Rs 65000.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('ANGOSTURA'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/Rum/2.png')} style={styles.imageleft}/>
              
            </TouchableOpacity>

            <Text style={styles.headerText}> Angostura{'\n'} 1919 Rum     </Text>
            <Text style={styles.price}>Rs 76000.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('ANG'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/Rum/3.png')} style={styles.imageleft}/>
              
            </TouchableOpacity>

            <Text style={styles.headerText}> Bayou White{'\n'} Louisiana Rum    </Text>
            <Text style={styles.price}>Rs 65000.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('BAYOUWHITE'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/Rum/4..png')} style={styles.imageleft}/>
             
            </TouchableOpacity>

           
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    opacity: 0.8,
  },
  headerText: {
    fontSize: 20,
    left: 195,
    fontWeight: 'bold',
    top: 200,
    color: 'brown',
    shadowColor: 'black',
  },
  price: {
    fontSize: 15,
    left: 240,
    fontWeight: 'bold',
    color: 'red',
    top: 210,
  },
  buttonContainer: {
    backgroundColor: 'brown',
    paddingVertical: 15,
    shadowColor: 'red',
    borderRadius: 30,
    width: 100,
    left: 250,
    top: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  imageleft:{
    right:75,
    }
});

export default RedWinePage;