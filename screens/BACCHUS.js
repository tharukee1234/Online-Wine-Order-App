import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/SparklinWine/im9.jpg')}
      >
      <Text style={styles.topicdart}>
      Bacchus Frizzante </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/SparklinWine/1.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>
      
      As England’s first Frizzante, this is a delightfully new and light-hearted way to enjoy Bacchus wine. Produced via tank fermentation, this lightly sparkling style fills the mouth with a gentle creamy effervescence that beautifully compliments the elegance and crisp freshness of the wine. The addition of only a small amount of sugar for the second fermentation in tank delivers the lighter fizz, and at just 2 bar pressure allows it to be bottled under screw cap. The “tank method”, without the prolonged lees contact ageing of our traditional bottle fermented sparkling wines, also lends itself to creating this lighter, fresher fruit focussed style of wine.
        
       
    </Text>

     </View>

      <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Spark");
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
    color:'red',
    fontWeight:'bold',
    top:5, 
  },
  image1:{

    flex:1,
    width:'23%',
    height:'70%',
    resizeMode:"contain",
    bottom:25,
    left:150

  },

  discript:{

    bottom:30,
    fontSize:15,
    color:'white',
    textAlign:'left'
  },

  BackbuttonText:{

    textAlign:'center',
    color:'#FFFFFF',
    fontSize:15,
    fontWeight:'bold'
  },

  buttonContainer:{

    backgroundColor:'blue',
    paddingVertical:12,
    borderRadius:10,
    width:'50%',
    bottom:20,
    left:5
  },

});
export default App;


