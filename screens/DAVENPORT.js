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
     Davenport Vineyards {'\n'}Limney Estate 2018 </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/SparklinWine/4.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>
      
    Davenport’s premium English Sparkling Wine, made from Chardonnay, Pinot Noir, and Pinot Meunier. With over three years maturing in the bottle on lees, it has plenty of yeast character combined with the surprisingly youthful fruit. This is a wine that is delicious now and will develop further over the long term. The flavours are of citrus, apple and hazelnuts with a dry balance and great length of flavour.
        
       
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
    width:'80%',
    height:'70%',
    resizeMode:"contain",
    bottom:25,
    left:40,

  },

  discript:{

    bottom:100,
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


