import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'
import { connect } from 'react-redux';
import { baseURL } from '../baseURL';

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}
function RenderRecipe(props) {
    const {recipe} = props;
    
    return (
        <View >
        <Card style={styles.card}
            featuredTitle={recipe.name}
            image={{uri: baseURL + recipe.image}}>
          <Text>{recipe.description}</Text>  
            </Card>

        </View>
    )
}

class  MealDetailScreen  extends Component {

    constructor(props) {
        super(props);
    }


  render(){

    const recipeId =  this.props.navigation.getParam('recipeId');
    console.log(recipeId);
    const recipe = this.props.recipes.recipes.filter(item => recipeId === item.id)[0];
    console.log(recipe);

    return (
        <View style={styles.screen} >
            <Text>The Recipe Detail Screen. Ingredients and steps will be implemented on this page.</Text>
            <RenderRecipe 
                recipe={recipe}
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    //   screen: {
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //   },
      card: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }
});

export default connect(mapStateToProps)(MealDetailScreen);