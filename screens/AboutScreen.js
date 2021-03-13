import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';


function AboutScreen({ navigation }) {
  return (
    <View style= {styles.container}>
      <Text style = {styles.text}>Name: Shelton Dmello</Text>
      <Text style = {styles.text}>Student ID: 101186743</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 24,
      justifyContent:'center'
    },
    text: {
      marginTop: 16,
      paddingVertical: 8,
      color: "#20232a",
      textAlign: "center",
      fontSize: 32,
      fontWeight: "bold"
    }
  });
export  default AboutScreen;