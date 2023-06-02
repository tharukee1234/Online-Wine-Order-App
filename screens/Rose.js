import React, { useState } from 'react';
import {
StyleSheet, View,SafeAreaView,Button,ImageBackground,TouchableOpacity,Text,Image,Dimensions,ScrollView} from 'react-native';

const RedWinePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/RoseMenu/th.jpg')}>
        <View style={styles.container}>

          <ScrollView>
            <Text style={styles.headerText}>  Minuty M Rosé  </Text>
            <Text style={styles.price}> Rs 4900.00 </Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('BestOverallRose'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/RoseMenu/6.png')} style={styles.imageleft}/>
              
            </TouchableOpacity>

            <Text style={styles.headerText}> Best Pinot Willamette Valley {'\n'}Vineyards</Text>
            <Text style={styles.price}>Rs 6500.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('BESTPIONT'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/RoseMenu/3.png')} style={styles.imageleft}/>
              
            </TouchableOpacity>

            <Text style={styles.headerText}> Best {'\n'} Full-Bodied Rosé     </Text>
            <Text style={styles.price}>Rs 6900.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('FULLBODIED'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/RoseMenu/2.png')} style={styles.imageleft}/>
              
            </TouchableOpacity>

            <Text style={styles.headerText}> Best for Rosé Beginners:{'\n'} Belle Glos Oeil{'\n'} de Perdrix Pinot{'\n'} Noir Blanc    </Text>
            <Text style={styles.price}>Rs 6500.00 </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("PlaceOrder")}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('BELLEGLOS'); }}>
              <Image width={Dimensions.get('window').width} source={require('../assets/RoseMenu/4.png')} style={styles.imageleft}/>
             
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