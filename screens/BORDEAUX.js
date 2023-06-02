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
      BORDEAUX </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/whiteMenu/1.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

       Bordeaux is the largest wine-growing region in France with thousands of vineyards producing a rainbow of wines, including the area's signature reds. The expansive region is divided into the Left Bank, dominated by cabernet sauvignon, and the Right Bank, ruled by merlot. White and dessert wines are also made, but red wines are what the region's vineyards are known for.
       
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
    top:20, 
  },
  image1:{

    flex:1,
    width:'50%',
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


