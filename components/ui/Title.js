import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../color";

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:Colors.assent500,
        textAlign:"center",
        borderWidth:2,
        borderColor:Colors.assent500,
        padding:8
      }
});
