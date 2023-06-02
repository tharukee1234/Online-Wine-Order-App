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
         source={require('../assets/SparklinWine/3.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>
      
    This classic cuvée has all the hallmarks of a fine sparkling wine. The subtle fruit on the nose, predominately red berries from the Pinot and a little light citrus from the Chardonnay, and a hint of peach, is backed up by a really long, mouth-filling palate that lingers and satisfies. Fresh and lively, ripe acidity is complimented by a subtle sweetness. Ideal as an aperitif, with canapés. Serve with smoked salmon, fish and seafood, especially lobster, trout or crayfish. Also excellent with mushroom risotto, light chicken dishes and sushi as well as local English hard cheeses. Albury Estate is the Surrey home of the Duke of Northumberland and is situated in an Area of Outstanding Natural Beauty. Their still rosé wine was served on the Royal Barge as part of the Queen’s Diamond Jubilee celebrations. Albury wines are biodynamically produced. 
        
       
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
    width:'70%',
    height:'70%',
    resizeMode:"contain",
    bottom:25,
    left:85

  },

  discript:{

    bottom:45,
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


