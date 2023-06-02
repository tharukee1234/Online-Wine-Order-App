import React, { useState } from 'react';
import {
StyleSheet, View,SafeAreaView,Button,ImageBackground,TouchableOpacity,Text,Image,Dimensions,ScrollView} from 'react-native';

const RedWinePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/BackGround/redwine1.jpg')}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.headerText}> DARK HORSE {'\n'} BIG RED BLEND</Text>
            <Text style={styles.price}> Rs 6500.00 </Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('DARTHOURSEBIG'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/RedMenu/1.png')} />
              
            </TouchableOpacity>

            <Text style={styles.headerText}> DARK HORSE {'\n'} DOUBLE DOWN {'\n'} RED BLEND</Text>
            <Text style={styles.price}>Rs 6500.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('DARKHOURSE2'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/RedMenu/2.png')} />
              
            </TouchableOpacity>

            <Text style={styles.headerText}> ROSEMOUNT     </Text>
            <Text style={styles.price}>Rs 6900.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('ROSEMOUNT'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/RedMenu/3.png')} />
              
            </TouchableOpacity>

            <Text style={styles.headerText}> ODYSSEY BRNAD     </Text>
            <Text style={styles.price}>Rs 6500.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('ODYSSEY'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/RedMenu/4.png')} />
             
            </TouchableOpacity>

            <Text style={styles.headerText}> GRANT RIVAON     </Text>
            <Text style={styles.price}>Rs 8500.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('GRNTRIVA'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/RedMenu/5.png')} />
              
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