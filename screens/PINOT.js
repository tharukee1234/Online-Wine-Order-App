import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/whiteMenu/white1.jpg')}
      >
      <Text style={styles.topicdart}>
      PINOT WHITE BIG </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/whiteMenu/3.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

      Pinot Noir is made like a white wine. It is juice fermenting in the absence of skins and a very different fermentation than red wine fermentation. [Anne Amie Vineyards’] is barrel fermented, like Chardonnay. Others are tank fermented in stainless steel. It is a much cooler/slower fermentation than red wine fermentation.  
Our style uses fully-ripe Pinot Noir.
       
    </Text>

     </View>

      <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Whitewine");
    }}>
    <Text style={styles.BackbuttonText}> - BACK TO LIST</Text>

    </TouchableOpacity>


    </ImageBackground> 
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
    
  },

  image:{

    flex:1,
    opacity:0.8
  },

  topicdart:{

    fontSize:25,
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    top:5, 
  },
  image1:{

    flex:1,
    width:'60%',
    height:'50%',
    resizeMode:"contain",
    bottom:50,
    left:100

  },

  discript:{

    bottom:100,
    fontSize:15,
    color:'white',
    textAlign:'justify'
  },

  BackbuttonText:{

    textAlign:'center',
    color:'#FFFFFF',
    fontSize:15,
    fontWeight:'bold'
  },

  buttonContainer:{

    backgroundColor:'chocolate',
    paddingVertical:12,
    borderRadius:10,
    width:'50%',
    bottom:20,
    left:5
  },

});
export default App;


