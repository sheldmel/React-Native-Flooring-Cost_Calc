import * as React from 'react';
import { TextInput ,Switch, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
export default MainScreen;
function MainScreen({ navigation }) {

  const [isEnabled, setIsEnabled] = React.useState(false);
  const [size, setSize] = React.useState('');
  const [flooring_price,setFlooring_price] = React.useState('');
  const [installation_cost,setInstallation_cost] = React.useState('');
  const [flooring,setFlooring] = React.useState(flooring_price * size);
  const [installation,setInstallation] = React.useState(installation_cost * size);
  const [unit, setUnit] = React.useState('Sq metre');
  const [value, setValue] = React.useState('')
  const input1 = React.createRef();
  const input2 = React.createRef();
  const input3 = React.createRef();
  function toggleSwitch(){
    setIsEnabled(previousState => !previousState);
      if (isEnabled == false){
        setUnit('Sq feet')
        setSize(size * 10.76)
      }
      else if (isEnabled == true){
        setUnit('Sq metre')
        setSize(size / 10.76) 
      }
    }
    function showCalculation(){
        setInstallation(installation_cost * size);
        setFlooring(flooring_price * size);
    }
    function clearFields(){
      setSize(0)
      setFlooring(0)
      setInstallation(0)
      input1.current.clear()
      input2.current.clear()
      input3.current.clear()
  }
  return (
    <View style={styles.container}>
      <Text style= {styles.display}>
      <Text>sq metre</Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        activeText={'On'}
        inActiveText={'Off'}
        />
        <Text>sq feet</Text>
      </Text>
        <Text style= {styles.display}>Enter Size of the room ({unit}):</Text>
        <TextInput ref = {input1}
        style={styles.input}
        placeholder='size'
        keyboardType= "numeric"
        onChangeText= {(size) => setSize(size)}/>
        <Text style= {styles.display}>Enter flooring price per {unit}:</Text>
        <TextInput ref = {input2}
        style={styles.input}
        placeholder='flooring price'
        keyboardType= "numeric"
        onChangeText= {(flooring_price) => setFlooring_price(flooring_price)}/>
        <Text style= {styles.display}>Enter installation cost per {unit}:</Text>
        <TextInput ref = {input3}
        style={styles.input}
        placeholder='installation cost'
        keyboardType= "numeric"
        onChangeText= {(installation_cost) => setInstallation_cost(installation_cost)}/>
        <View style={{flex:1},{flexDirection:"row"}}>     
        <TouchableOpacity style={styles.button} onPress={showCalculation}>
          <Text> Calculate </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.clearButton} onPress={clearFields}>
          <Text style={{color:'white'}}> Clear </Text>
        </TouchableOpacity>
        </View> 
        <View style = {{margin: 10}}>
        <Text style= {styles.display1}>Total Installation cost before Tax: ${installation}</Text>
        <Text style= {styles.display1}>Total flooring cost before Tax: ${flooring}</Text>
        <Text style= {styles.display1}>Total cost: ${installation + flooring}</Text>
        <Text style= {styles.display1}>Tax: ${(installation + flooring) * 0.13}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 20,
  },
  clearButton: {
    alignItems: "center",
    backgroundColor: "#FF0000",
    padding: 10,
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    fontSize:12,
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:100,
    height: 30,
  },
  display:{
    padding: 10,
    fontSize: 15
  },
  display1:{
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
