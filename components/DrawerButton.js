import React from "react";
import { StyleSheet,Image, TouchableOpacity ,Text,View} from "react-native";

const DrawerButton =({navigation})=> {
  return (
  <View style={styles.listContainer}>
  <TouchableOpacity  style={styles.wrapper}  onPress={()=>navigation.toggleDrawer()}>
<Image style={styles.icon} source={require("../assets/navButton.png")}>
</Image >

  </TouchableOpacity >
  <TouchableOpacity  style={styles.button}  onPress={()=>navigation.navigate("Login") }>
<Text>SignOut</Text>

  </TouchableOpacity>
  
  </View>
  
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row'
  } ,icon: {
    width: 24,
    height:24
  }, wrapper: {
    marginLeft:30

  },
  button:{

    marginLeft:180,
    alignContent:'flex-end'
  }
});

export default DrawerButton;
