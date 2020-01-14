import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
 import { ListItem, Card } from 'react-native-elements';
 import { baseURL } from './baseURL';
 import { fetchRecipes } from '../redux/ActionCreators'
 import { connect } from 'react-redux';


 const people = [
    {name: 'paul',lastName: 'sin', key: '1'},
    {name: 'john', lastName: 'hot', key: '2'},
    {name: 'linda', lastName: 'bote', key: '3'}
];

const mapDispatchToProps = {
    
     fetchRecipes
}

const renderListItem = ({item}) => {
 return (
          <Card
            featuredTitle={item.name}
            // image={require('./images/react-lake.jpg')}>
            image={{uri: baseURL + item.image}}>
            <Text style={{margin: 10}}>
                {item.description}
            </Text>
           </Card>
 )
}

class Main extends Component {
    constructor(props){
        super(props);

    }


componentDidMount() {
    
    this.props.fetchRecipes();
}

render() {
  


    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <FlatList
            // data={people}
            data={this.props.recipes.recipes}
            keyExtractor={(item) => item.id.toString() }
            renderItem={renderListItem}
             />
        </View>
        </SafeAreaView>
    )
}
}

const mapStateToProps = state => ({
    
    recipes: state.recipes
})

export default connect(mapStateToProps,mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  