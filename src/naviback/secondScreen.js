/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class secondScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ' ',
      input: ' ',
    };
  }

  render() {
    const {
      navigation,
      route 
    } = this.props;
    

    return (
      <View style={styles.container}>
        <View style={[styles.child, {backgroundColor: '#4B2875',justifyContent:'center',alignItems:'center'}]}>
          <TouchableOpacity onPress={()=>{
            const newHandler = route.params.completionHandler;
            newHandler('one more step')
            navigation.goBack()
            // navigation.navigate('First',{data: this.passingValue()})

          }}>
            <TextInput style={{width:200,height:50,backgroundColor:'#f00'}}>
              onChangeText={input =>this.setState()}
            </TextInput>
              <Text style={{fontSize:40,color:'white'}}></Text>
          </TouchableOpacity>
        </View>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    // alignItems:"flex-end",
    justifyContent: 'center',
  },
  child: {
    //height: 100,
    width: '100%',
    flex: 1,
  },
});

export default secondScreen;
