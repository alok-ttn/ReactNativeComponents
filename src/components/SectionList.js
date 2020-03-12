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
      input: ' ',
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
        sectionListArray: result
      }, () => {
        // console.log(this.state.sectionListArray);
      });
    }

  render() {
    const {sectionListArray} = this.state;
    console.log(this.state.sectionListArray);
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={sectionListArray}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item} ) => <Item finaldata={item} />}
          renderSectionHeader={({ section: { categoryId } }) => (
            <Text style={styles.header}>{categoryId}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

function Item({finaldata}) {
  //console.log(title)
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{finaldata.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    backgroundColor: 'red',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default Section;
