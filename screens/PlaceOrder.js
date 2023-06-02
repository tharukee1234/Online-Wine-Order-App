import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Alert } from 'react-native';

function ProductScreen ({navigation}) {

  const [cartItems, setCartItems] = useState([]);

  const products = [

       //REDWINE

    { id: '1', name: 'DARK HORSE', price:6500.00, image: require('../assets/RedMenu/1.png')},
    { id: '2', name: 'DOUBLE DOWN', price:6500.00, image: require('../assets/RedMenu/2.png') },
    { id: '3', name: 'ROSEMOUNT  ', price:6900.00, image: require('../assets/RedMenu/4.png') },
    { id: '4', name: 'ODYSSEY BRNAD', price: 30, image: require('../assets/RedMenu/5.png')},
    { id: '5', name: 'GRANT RIVAON', price: 8500.00 , image: require('../assets/RedMenu/6.png') },

      //WHITE WINE

    { id: '6', name: 'BORDEAUX BLAN', price:8000.00, image: require('../assets/whiteMenu/1.png')},
    { id: '7', name: 'CHARDONNAY', price:6800.00, image: require('../assets/whiteMenu/2.png') },
    { id: '8', name: 'PINOT GRIGIO', price:6500.00, image: require('../assets/whiteMenu/3.png') },
    { id: '9', name: 'RIESLING', price:9000, image: require('../assets/whiteMenu/4.png')},
    
    { id: '10', name: 'SAUTERNES', price: 11200.00 , image: require('../assets/whiteMenu/5.png') },

     
     //ROSE WINE


    { id: '11', name: 'MINUTY M ROSE', price:4900.00, image: require('../assets/RoseMenu/2.png')},
    { id: '12', name: 'BEST PINOT NOIR', price:6500.00, image: require('../assets/RoseMenu/3.png') },
    { id: '13', name: 'BEST FULL-BODIED', price:6900.00, image: require('../assets/RoseMenu/4.png') },
    { id: '14', name: 'BEST BELLE GLOS', price:6500, image: require('../assets/RoseMenu/6.png')},

     //RUM
    

    { id: '15', name: 'BAYOU XO RUM', price:100000.00, image: require('../assets/Rum/1.png')},
    { id: '16', name: 'ANGOSTURA 7 OLD', price:65000.00, image: require('../assets/Rum/2.png') },
    { id: '17', name: 'ANGOSTURA 1919 RUM ', price:76000.00, image: require('../assets/Rum/3.png') },
    { id: '18', name: 'BAYOU WHITE', price:65000, image: require('../assets/Rum/4..png')},


    //Spark Wine
    
    { id: '19', name: 'BACCHUS FRIZZANT', price:20000.00, image: require('../assets/SparklinWine/1.png')},
    { id: '2', name: 'SPARKING ROSE', price:9000.00, image: require('../assets/SparklinWine/2.png') },
    { id: '20', name: 'ALBURY ESTATE', price:69000.00, image: require('../assets/SparklinWine/3.png') },

    { id: '21', name: 'DAVENPORT LIMNEY', price:10000.00, image: require('../assets/SparklinWine/4.png') },


    //Dissert Win


     { id: '22', name: 'Barefoot Moscato', price:5250.00, image: require('../assets/DesertMenu/1.png')},

    { id: '23', name: 'Cinzano Bianco Vermouth', price:9000.00, image: require('../assets/DesertMenu/2.png') },
    
    { id: '24', name: 'Martini Extra Dry  ', price:5150.00, image: require('../assets/DesertMenu/3.png') },

    { id: '25', name: 'Martini Fiero', price:5600.00, image: require('../assets/DesertMenu/4.png') },




    //CHAMPAINE


    { id: '26', name: 'LANSON ROSE LAB', price:50000.00, image: require('../assets/ChampaineMenu/1.png')},
    { id: '27', name: 'LANSON BLACK LABEL CUVEE', price:45000.00, image: require('../assets/ChampaineMenu/2.png') },
    { id: '28', name: 'LANSON BLACK LABEL ', price:70000.00, image: require('../assets/ChampaineMenu/7.png') },

   
    
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    Alert.alert('Success', 'Product added to cart');
  };

  

const removeFromCart = (product) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
  setCartItems(updatedCartItems);
  Alert.alert('Success', 'Product removed from cart');
};




  const handlePayment = () => {
    if (cartItems.length > 0) {
      const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
      Alert.alert('Youre Payment Cost:--', `Total amount: Rs${totalAmount}`);
      setCartItems([]);
      navigation.navigate("Payment");
      
    } else {
      Alert.alert('Error', 'Your cart is empty');
    }
  };


  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.itemtext}>{item.name}</Text>
      <Text style={styles.pricetext}>Price: RS {item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
      <Text style={styles.buttonText}>Remove</Text>
    </TouchableOpacity>

    </View>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text >{item.name}</Text>
        <Text>Price: Rs {item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>

      
      <TouchableOpacity 
      onPress={() => navigation.navigate("Payment")}>
      
      </TouchableOpacity>
      <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>

      <Image
        style= {styles.image1}
         source={require('../assets/cart.png') }>
      </Image>
      

      <Text style={styles.heading}>CART</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 20,
  },
  productItem: {
    marginBottom: 20,
    //alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
    flex:1,
    
    
  },
  addButton: {
    position:'absolute',
    backgroundColor: 'blue',
    paddingVertical:10,
    shadowColor:"red",
    borderRadius:30,
    width:99,
    left:118,
    bottom:15
    
  },
  paymentButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },

  pricetext:{
    fontSize:15,
    left:170,
    bottom:80
  },

  itemtext:{

    fontSize:15,
    fontWeight:'bold',
    left:165,
    bottom:90
  },

  removeButton:{

    position:'absolute',
    backgroundColor: 'blue',
    paddingVertical:10,
    shadowColor:"red",
    borderRadius:30,
    width:99,
    left:220,
    bottom:15
  },

  image1:{

    height:35,
    width:35,
    top:44,
    left:55
  }
};

export default ProductScreen;
