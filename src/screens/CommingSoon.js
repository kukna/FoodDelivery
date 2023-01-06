import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

const CommingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming  Soon</Text>
    </View>
  )
}

const styles=StyleSheet.create({
 container:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
 },
 text:{
    fontSize:30,
    color:"#FA4A0C"
 },
})

export default CommingSoon