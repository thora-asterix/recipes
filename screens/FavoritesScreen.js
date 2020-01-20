import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { baseURL } from '../baseURL';
import { connect } from 'react-redux';
import { loggedIn } from '../redux/recipes';

const mapStateToProps = state => {
    return {
    recipes: state.recipes,
    loggedIn: state.logIn
    }
}


class FavoritesScreen extends Component{
   constructor(props) {
    super(props);
   }

 log = this.props.loggedIn.loggedIn;

  
    render(){
        const renderListItem = ({item}) => {
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

          
           const logIn = <Text>please log in</Text>;
        const favoriteRecipes = this.props.recipes.recipes.filter(recipe => recipe.favorite === true)
        console.log(favoriteRecipes);
        console.log(this.props.loggedIn.loggedIn);

      

    return (
        <SafeAreaView style={styles.container}>
         <View style={styles.container}>
             {this.props.loggedIn.loggedIn ? <FlatList
            // data={people}
            data={favoriteRecipes}
            keyExtractor={(item) => item.id.toString() }
            renderItem={renderListItem}
             />: logIn}
        </View>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
      screen: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }
});

export default connect(mapStateToProps)(FavoritesScreen);