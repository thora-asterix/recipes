import React, { Component } from 'react';
import { Text, View,ScrollView, StyleSheet } from 'react-native';
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
        <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{ flex: 1}} >
        <Card style={styles.card}
            featuredTitle={recipe.name}
            image={{uri: baseURL + recipe.image}}>
          <Text>{recipe.description}</Text>  

          <Text style={styles.ingi}>Ingredients</Text>
          <Text style={{marginTop: 10 }}>{recipe.ingredients.map(item=>'Quantity: '+item.quantity+' of '+ item.name+' ('+item.type+')'+'\n')}</Text>

            </Card>
        <Card style={styles.card}
            featuredTitle={'Steps'}
        >
        <Text style={styles.ingi}>Steps to Cook!</Text>
        <Text>{recipe.steps.map((item,id)=> (id+1)+'. '+item+'\n')}</Text>
        </Card>
        </ScrollView>
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
            <RenderRecipe 
                recipe={recipe}
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
      screen: {
          flex: 1,
          height:'auto',
          justifyContent: 'center',
          alignItems: 'center'
      },
    ingi:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:'15px',
        marginTop:'10px'
    },
      card: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }
});

export default connect(mapStateToProps)(MealDetailScreen);