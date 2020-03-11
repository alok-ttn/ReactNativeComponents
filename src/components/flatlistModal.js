/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image,SafeAreaView,FlatList,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import Modal from "react-native-modal";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'abc ',
      input: ' ',
      isModalVisible: false,
      offers:[
        {
            line1:'Number 1',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#efbbcc',

        },
        {
            line1:'Number 2',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#b19cd9',
        },
        {
            line1:'Number 3',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#efbbcc',

        },
        {
            line1:'Number 4',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#b19cd9',
        },
        {
            line1:'Number 5',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#efbbcc',

        },
        {
            line1:'Number 6',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#b19cd9',
        },
        {
            line1:'Number 7',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#efbbcc',

        },
        {
            line1:'Number 8',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#b19cd9',
        },
        {
            line1:'Number 9',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#efbbcc',

        },
        {
            line1:'Number 10',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#b19cd9',
        },
        {
            line1:'Number 11',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#efbbcc',

        },
        {
            line1:'Number 12',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#b19cd9',
        },
        {
            line1:'Number 13',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#efbbcc',

        },
        {
            line1:'Number 14',
            line2:'Zylo Basic Health Checkup',
            line3:'59 Tests included',
            line9:'#b19cd9',
        },

    ],
    };

  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const {navigation} = this.props;
    const {input,text,offers} = this.state;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
      <SafeAreaView style={styles.container}>
         <FlatList
          showsVerticalScrollIndicator={false}
          data={offers}
          renderItem={({item})=>{
              return (
             <TouchableOpacity style={[styles.elements,{width:windowWidth-20,backgroundColor:item.line9}]}
             onPress={this.toggleModal}
             >
                 <Text style={{fontSize:15,flex:1}}>
                     {item.line1}
                 </Text>

             </TouchableOpacity>
              );
          }}>

          </FlatList>
          <Modal isVisible={this.state.isModalVisible}
          animationIn='slideInDown'
          backdropOpacity='0.7'
          animationInTiming={500}
          hasBackdrop={this.toggleModal}
          >
          <View style={{ flex: 0.2,backgroundColor:'#fff' }}>
        <Text>{text}</Text>
            <Button title="Proceed Next" onPress={this.toggleModal} />
          </View>
        </Modal>
      </SafeAreaView>

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
  elements:
   {height:100,
    marginLeft:10,
    marginRight:20,
    borderRadius:10,
    marginBottom:20,
    },

});

export default Home;
