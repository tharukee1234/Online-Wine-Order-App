import React, { useState } from 'react';
import {
StyleSheet, View,SafeAreaView,Button,ImageBackground,TouchableOpacity,Text,Image,Dimensions,ScrollView} from 'react-native';

const Champaines = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/BackGround/ChamBack.jpeg')}>
        <View style={styles.container}>
          <ScrollView>

            <Text style={styles.headerText}> LANSON ROSE {'\n'} LAB</Text>
            <Text style={styles.price}> Rs 50000.00 </Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('LANSON'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/ChampaineMenu/1.png')} />
           
            </TouchableOpacity>



            <Text style={styles.headerText}> LANSON {'\n'} BLACK  LABEL {'\n'}CUVEE BRUTE</Text>
            <Text style={styles.price}>Rs 45000.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('LANSONLABEl'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/ChampaineMenu/2.png')} />
             
            </TouchableOpacity>



            <Text style={styles.headerText}> LANSON {'\n'}BALCK LABEL   </Text>
            <Text style={styles.price}>Rs 70000.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('LANSONBLACK'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/ChampaineMenu/7.png')} />
              
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
    opacity: 0.9,
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
});

export default Champaines;