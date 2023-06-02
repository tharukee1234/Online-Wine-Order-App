import React, { useState } from 'react';
import {
StyleSheet, View,SafeAreaView,Button,ImageBackground,TouchableOpacity,Text,Image,Dimensions,ScrollView} from 'react-native';

const RedWinePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/DesertMenu/im11.jpg')}>
        <View style={styles.container}>

          <ScrollView>
            <Text style={styles.headerText}>  Barefoot Moscato  </Text>
            <Text style={styles.price}> Rs 5250.00 </Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('BAREFOOT'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/DesertMenu/1.png')} style={styles.imageleft}/>
              
            </TouchableOpacity>

            <Text style={styles.headerText}> Cinzano Bianco Vermouth</Text>
            <Text style={styles.price}>Rs 9000.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('CINZANO'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/DesertMenu/2.png')} style={styles.imageleft}/>
              
            </TouchableOpacity>

            <Text style={styles.headerText}> Martini Extra Dry   </Text>
            <Text style={styles.price}>Rs 5150.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('MARTINI'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/DesertMenu/3.png')} style={styles.imageleft}/>
              
            </TouchableOpacity>

            <Text style={styles.headerText}>Martini Fiero</Text>
            <Text style={styles.price}>Rs 5600.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('FIERO'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/DesertMenu/4.png')} style={styles.imageleft} />
             
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
    right:90
  }
});

export default RedWinePage;