import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";

/*const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Button   title="done ?"/>
      <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
      marginRight: 8,
      height: 30,
      width: 30
  }
});

export default listItem;*/
export default class listItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styletype: "normal"

    };
  }

  // state.styletype === "normal" ? styles.listItem : styles.listItem2
  render() {
    // const{placeImage,placeName} = this.props;

    return (
      <TouchableOpacity onPress={this.props.onItemPressed}>
        <View style={styles.listItem}>
          <Button title="done ?" onPress={() => {
            if (this.state.styletype === "normal") {
              this.setState({
                styletype: "underline"
              })
            } else {
              this.setState({
                styletype: "normal"
        })
          }}
          } />
          <Image resizeMode="cover" source={this.props.placeImage} style={styles.placeImage} />
          <Text 
           multiline="multiline"
           style={this.state.styletype === "normal" ? styles.listItem2 : styles.listItem3}>
            {this.props.placeName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    textDecorationLine: "line-through",
    flexDirection: "row",
    alignItems: "center"
  },

  listItem2: {fontSize:25,
    textDecorationLine:"none"
  },
  listItem3: {fontSize:25,
    textDecorationLine:"line-through"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

