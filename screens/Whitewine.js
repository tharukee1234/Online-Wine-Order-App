import React, { useState } from 'react';
import {
StyleSheet, View,SafeAreaView,Button,ImageBackground,TouchableOpacity,Text,Image,Dimensions,ScrollView} from 'react-native';

const RedWinePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/BackGround/im14.jpg')}>
        <View style={styles.container}>
          <ScrollView>

            <Text style={styles.headerText}> BORDEAUX BLANC</Text>
            <Text style={styles.price}> Rs 8000.00 </Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('BORDEAUX'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/whiteMenu/1.png')} />
           
            </TouchableOpacity>



            <Text style={styles.headerText}> CHARDONNAY</Text>
            <Text style={styles.price}>Rs 6800.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('CHARDONNAY'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/whiteMenu/2.png')} />
             
            </TouchableOpacity>



            <Text style={styles.headerText}> PINOT GRIGIO </Text>
            <Text style={styles.price}>Rs 6900.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('PINOT'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/whiteMenu/3.png')} />
            
            </TouchableOpacity>



            <Text style={styles.headerText}> RIESLING  </Text>
            <Text style={styles.price}>Rs 6500.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('RIESLING'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/whiteMenu/4.png')} />
              
            </TouchableOpacity>



            <Text style={styles.headerText}> SAUTERNES  </Text>
            <Text style={styles.price}>Rs 11200.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('SAUTERNES'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/whiteMenu/5.png')} />
              
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
});

export default RedWinePage;