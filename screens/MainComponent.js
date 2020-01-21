import React, { Component } from 'react';
import { Alert, TextInput, SafeAreaView, View, FlatList, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
 import { ListItem, Card } from 'react-native-elements';
 import { baseURL } from '../baseURL';
 import { fetchRecipes } from '../redux/ActionCreators'
 import { connect } from 'react-redux';
import {logInUser} from '../redux/ActionCreators'

const mapDispatchToProps = {
    
     fetchRecipes,
     logInUser
}

   
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn:false
          };

    }

    boom = [
        {
            username:'ash',
            password:'rana'
        },
        {
            username:'thora',
          password:'huang'
        }
      ]

    onLogin() {

        const { username, password } = this.state;
        const arr = this.boom.map(item=>item.username);
    
        if(arr.includes(this.state.username)){
            Alert.alert('Credentials', `${username} + ${password}`);
            this.setState({loggedIn:true});
          this.props.logInUser();
            this.props.navigation.setParams({results: 'one'});   // <--- set data when user clicks button.
            console.log('alert will show '+ this.props)
            
            this.resetForm();
        }else{
            Alert.alert('Please sign up');
            this.resetForm();

        }
    
    }

    resetForm(){
        this.setState({username:'', password:''});
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
       {this.state.loggedIn ? <Text>You are not logged In!</Text> : 
       <View>
       <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />
            
            <Button
              title={'Login'}
              style={styles.input}
              onPress={this.onLogin.bind(this)}
            />
            </View>}
            
    
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
    loggedIn: state.loggedIn
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
  