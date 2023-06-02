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
      CHARDONNAY </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/whiteMenu/2.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

       Chardonnay is the most popular white wine on the planet! Chardonnay grapes are extremely resilient grapes that require little maintenance, making them easy to grow in almost any climate. And this means that they are available in a wide variety of styles. Learn more here in our guide to Chardonnay.No two sources of Chardonnay wine will produce quite the same flavor profile. As it exemplifies the terroir of the region in which it was harvested, its flavor profile changes based on the soil in which it was grown.
       
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
    width:'40%',
    height:'50%',
    resizeMode:"contain",
    bottom:50,
    left:100

  },

  discript:{

    bottom:100,
    fontSize:15,
    color:'white',
    textAlign:'left',
    left:10
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


