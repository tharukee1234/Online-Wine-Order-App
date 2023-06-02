import React, { useState } from 'react';
import {
StyleSheet, View,SafeAreaView,Button,ImageBackground,TouchableOpacity,Text,Image,Dimensions,ScrollView} from 'react-native';

const RedWinePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/SparklinWine/im6.jpg')}>
        <View style={styles.container}>

          <ScrollView>
            <Text style={styles.headerText}>  Bacchus Frizzante  </Text>
            <Text style={styles.price}> Rs 20000.00 </Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('BACCHUS'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/SparklinWine/1.png')} />
              
            </TouchableOpacity>

            <Text style={styles.headerText}> Sparkling Rosé 2015</Text>
            <Text style={styles.price}>Rs 9000.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('SROSE'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/SparklinWine/2.png')} />
              
            </TouchableOpacity>

            <Text style={styles.headerText}> Albury Estate {'\n'}Classic Cuvée NV    </Text>
            <Text style={styles.price}>Rs 69000.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('ALBURY'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/SparklinWine/3.png')} />
              
            </TouchableOpacity>

            <Text style={styles.headerText}>Davenport Vineyards {'\n'}Limney Estate 2018</Text>
            <Text style={styles.price}>Rs 10000.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('DAVENPORT'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/SparklinWine/4.png')} style={styles.imageleft} />
             
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
    right:150
  }
});

export default RedWinePage;