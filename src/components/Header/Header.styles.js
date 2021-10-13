import { StyleSheet, Dimensions } from "react-native"
export default StyleSheet.create({
  container:{
    width: Dimensions.get('window').width,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
    padding: 10,
  },
  text:{
    color: '#E89803',
    fontSize:40,
    fontWeight:'bold',
  }
})
