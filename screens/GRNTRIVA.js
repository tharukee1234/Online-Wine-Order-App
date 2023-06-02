import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/RedMenu/BIGRED.jpg')}
      >
      <Text style={styles.topicdart}>
      GRANT RIVAON</Text>
     <Image
        style= {styles.image1}
         source={require('../assets/RedMenu/5.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

       GRANT RIVAON wine is like putting a triangle in your mouth – it hits you in specific places with high impact and not elsewhere. It’s like getting punched in the arm in the same place over and over again. An angular wine also has high acidity.First things first, you’ll want to start identifying the fruit level in the wine. It doesn’t matter if the wine is light, rich, sweet, or dry, they can all be categorized by the fruit level. We have many ways of describing fruitiness in wine but pretty much all wines can be shuffled into just 2 primary categories: Fruit Forward or Savory
    </Text>

     </View>

      <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Redwine");
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


