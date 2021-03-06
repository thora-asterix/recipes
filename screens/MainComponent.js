import React, { Component } from 'react';
import { Alert, TextInput, SafeAreaView, View, FlatList, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
 import { ListItem, Card } from 'react-native-elements';
 import { baseURL } from '../baseURL';
 import { fetchRecipes } from '../redux/ActionCreators'
 import { connect } from 'react-redux';
import {logInUser} from '../redux/ActionCreators'
import {logOutUser} from '../redux/ActionCreators'
const mapDispatchToProps = {
     fetchRecipes,
}

   
class Main extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'All Recipes'
    };

    componentDidMount() {
        this.props.fetchRecipes();
    }  


render() {
    const renderListItem = ({item,navigation}) => {
        return (
           
            
             <TouchableOpacity onPress={() => this.props.navigation.navigate({routeName: 'MealDetail', params: {
                 recipeId: item.id
             }})} >
                 <Card
                   featuredTitle={item.name}
                   // image={require('./images/react-lake.jpg')}>
                   image={{uri: baseURL + item.image}}>
                   <Text style={{margin: 10}}>
                       {item.description}
                   </Text>
                  </Card>
                  </TouchableOpacity>
               
        )
       }
       


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
    recipes: state.recipes,
})

export default connect(mapStateToProps,mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
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
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
  });
  