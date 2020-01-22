import React, { Component } from 'react';
import { Text, View,ScrollView, StyleSheet } from 'react-native';
import { Card ,Icon} from 'react-native-elements'
import { connect } from 'react-redux';
import { baseURL } from '../baseURL';
import {addFavoriteRecipe} from '../redux/ActionCreators'

const mapStateToProps = state => {

    return {
        recipes: state.recipes,
        favorites: state.favorites
    }
}

const mapDispatchToProps = {
    addFavoriteRecipe
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

                    <Icon
                        name={props.favorite ? 'heart' : 'heart-o'}                    
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={()=>props.addFavoriteRecipe(recipe.id)}
                    />

                    <Text style={styles.ingi}>Ingredients</Text>

                    <Text style={{marginTop: 10 }}>{recipe.ingredients.map(item=>'Quantity: '+item.quantity+' of '+ item.name+' ('+item.type+')'+'\n')}</Text>

                </Card>

                <Card style={styles.card}
                    featuredTitle={'Steps'}>

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
                favorite={this.props.favorites.includes(recipeId)}
                addFavoriteRecipe={this.props.addFavoriteRecipe}
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

export default connect(mapStateToProps,mapDispatchToProps)(MealDetailScreen);