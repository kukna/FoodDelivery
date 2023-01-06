import {View, Text, Image, StyleSheet, TextInput,ScrollView,SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import TopTabNavigation from './TopTabNavigation';



const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.navBar} source={require('../images/navBar.png')} />
        <Image style={styles.cart} source={require('../images/cart.png')} />
      </View>
      <View style={styles.quote}>
        <Text style={styles.quoteLabel}>Delicious food for you</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <Image
          style={styles.navBar}
          source={require('../images/searchIcon.png')}
        />
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="#555555"
          placeholder="Search"
          onChangeText={value => setSearchInput(value)}
          value={searchInput}
        />
      </View>
    </View>
    <TopTabNavigation/>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:50,
    backgroundColor: '#F2F2F2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cart: {
    width: 30,
    height: 30,
  },
  navBar: {
    width: 20,
    height: 20,
  },
  quote: {
    marginTop: 40,
    marginBottom: 25,
    maxWidth: '70%',
  },
  quoteLabel: {
    color: 'black',
    fontSize: 32,
    fontWeight: '700',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    backgroundColor: '#efeeee',
    borderRadius: 40,
  },
  searchInput: {
    width: '88%',
    fontSize: 16,
    color: 'black',
  },
});

export default HomeScreen;
