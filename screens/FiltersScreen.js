import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { baseURL } from '../baseURL';
import { SafeAreaView, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import { ListItem, Card } from 'react-native-elements';



const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        loggedIn: state.logIn
    }
}

class FilterScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            specificRecipe:[]
        }
        
    }

    componentDidMount(){
        this.setState({specificRecipe:this.props.recipes.recipes})
    }

    static navigationOptions = {
        title: 'Categories'
    };


    _getMeat(){
        const recipe = this.props.recipes.recipes.filter(item=>item.type==='meat')
        this.setState({specificRecipe: recipe});
        };
        
    _getVeg(){
        const recipe = this.props.recipes.recipes.filter(item=>item.type==='vegitarian')
            this.setState({specificRecipe: recipe});

        
        }
        
        _getDesert(){
            const recipe = this.props.recipes.recipes.filter(item=>item.type==='desert')
            this.setState({specificRecipe: recipe});

        }
    render()
{
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

  


const recipes = this.props.recipes.recipes;

    return (
        <SafeAreaView style={{flex:1}}>
         <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableHighlight onPress={this._getMeat.bind(this)} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Meat</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._getVeg.bind(this)} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Vegitarian</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._getDesert.bind(this)} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>desert</Text>
          </View>
        </TouchableHighlight>
        </View>

        {this.state.specificRecipe ? 
        <View style={{flex:1}}>
             <FlatList
           data={this.state.specificRecipe}
           keyExtractor={(item) => item.id.toString() }
           renderItem={renderListItem}
            />
       </View> :  <View style={{flex:1}}>
             <FlatList
           data={recipes}
           keyExtractor={(item) => item.id.toString() }
           renderItem={renderListItem}
            />
       </View>}
        
       </SafeAreaView>
    )
}
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      
  });
export default connect(mapStateToProps)(FilterScreen);