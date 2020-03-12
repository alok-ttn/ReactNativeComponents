/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, SectionList} from 'react-native';
import SectionHeaderCustom from './SectionListHeader';
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'abc ',
      input: 0,
      isModalVisible: false,
      sectionListArray: [],
      itemsArray: [
        {
          categoryId: 'fruits',
          title: 'seasonal fruits',
          quantity: 2,
        },
        {
          categoryId: 'fruits',
          title: 'regional fruits',
          quantity: 3,
        },
        {
          categoryId: 'flowers',
          title: 'seasonal fruits',
          quantity: 1,
        },
        {
          categoryId: 'flowers',
          title: 'yearly fruits',
          quantity: 4,
        },
        {
          categoryId: 'vegetables',
          title: 'seasonal veg',
          quantity: 3,
        },
      ],
    };
  }
  componentDidMount() {
    const {itemsArray} = this.state;
      console.log('Component DID MOUNT!');

      const result = itemsArray.reduce(function(sections, item) {
        let section = sections.find(
          section => section.categoryId === item.categoryId,
        );
        if (!section) {
          section = {categoryId: item.categoryId, data: []};
          sections.push(section);
        }
        section.data.push(item);

        return sections;
      }, []);
      this.setState({
        sectionListArray: result,
      }, () => {
      console.log(this.state.sectionListArray);
      });
    }
  msgTotal(element) {element.reduce(function(prev, cur) {
      return prev + cur.quantity;
    }, 0);
  }


  render() {
    const {sectionListArray} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={sectionListArray}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item} ) => <Item finaldata={item} />}
          renderSectionHeader={({ section: { categoryId,data} }) => (
            <View style={styles.header}>
            <Text style={styles.headerText}>{categoryId}</Text>
          <Text style={styles.header}>{this.msgTotal(data)}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

function Item({finaldata}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{finaldata.title}</Text>
      <Text style={styles.title}>{finaldata.quantity}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    // backgroundColor: 'red',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  headerText: {
    fontSize: 32,
    backgroundColor: '#fff',
    fontWeight:'bold',
  },
  title: {
    fontSize: 24,
  },
});

export default Section;
