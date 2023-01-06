import {SafeAreaView, View, FlatList, StyleSheet, Text, Image} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: '../images/foodOne.png',
    title: 'Veggie tomato mix',
    price: 'N1,900',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: '../images/foodOne.png',
    title: 'Spicy fish sauce',
    price: 'N2,300.99',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: '../images/foodOne.png',
    title: 'Veggie tomato mix',
    price: 'N1,900',
  },
];

const Item = ({image, title, price}) => (
  <View style={styles.item}>
    <Image style={styles.image} source={require('../images/foodOne.png')} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

const TabsList = () => {
  const renderItem = ({item}) => (
    <Item image={item.image} title={item.title} price={item.price} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

export default TabsList;

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        borderRadius: 30,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:30,
        width:200,
        marginRight:30,
    },
    image:{
        borderRadius:75,
        width:150,
        height:150,
    },
    title:{
        fontSize:20,
        color:'black',
        width:'60%',
        textAlign:'center',
        fontWeight:'600',
        marginTop:20,
    },
    price:{
        color:"#FA4A0C",
        fontWeight:'700',
        marginTop:13,
    },
    container:{
        marginLeft:50,
        marginTop:40,
    },

});
