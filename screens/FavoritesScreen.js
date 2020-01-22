import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { baseURL } from '../baseURL';
import { connect } from 'react-redux';
import { loggedIn } from '../redux/recipes';

const mapStateToProps = state => {
    return {
    recipes: state.recipes,
    loggedIn: state.logUser,
    favorites: state.favorites
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
                       image={{uri: baseURL + item.image}}>
                       <Text style={{margin: 10}}>
                           {item.description}
                       </Text>
                      </Card>
                      </TouchableOpacity>
            )
           }

          
        const logIn = <Text>please log in</Text>;

        let flat = null;
         if(this.props.favorites.length === 0){
             flat= <Text>Please select favorites from listed Recipes!</Text>
         }else{
            flat = <FlatList
            data={this.props.recipes.recipes.filter(
                recipe => this.props.favorites.includes(recipe.id)
            )}
            keyExtractor={(item) => item.id.toString() }
            renderItem={renderListItem}
             />
         }

        // const favoriteRecipes = this.props.recipes.recipes.filter(recipe => recipe.favorite === true)

      

    return (
        <SafeAreaView style={styles.container}>
         <View style={styles.container}>
             {this.props.loggedIn.loggedIn ? 
            flat : logIn}
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