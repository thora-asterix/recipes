import React, { Component } from 'react';
import { Alert, TextInput, SafeAreaView, View, FlatList, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
 import { ListItem, Card } from 'react-native-elements';
 import { baseURL } from '../baseURL';
 import { fetchRecipes } from '../redux/ActionCreators'
 import { connect } from 'react-redux';
import {logInUser} from '../redux/ActionCreators'
import {logOutUser} from '../redux/ActionCreators'

const mapDispatchToProps = {
     logInUser,
     logOutUser
}

   
class Profile extends Component {
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
            this.props.logInUser(this.state.username);
            this.props.navigation.setParams({results: 'one'});   // <--- set data when user clicks button.
            
            this.resetForm();
        }else{
            Alert.alert('Please sign up');
            this.resetForm();

        }
    
    }

    onLogout(){
      if(this.state.loggedIn){
        this.props.logOutUser();
        this.setState({loggedIn:false})
      }
    }

    resetForm(){
        this.setState({username:'', password:''});
    }
    static navigationOptions = {
        title: 'All Recipes'
    };


render() {
    let name=null
    if(this.state.loggedIn){
        name = <Text style={{margin:'10px', fontSize:'18px'}}>You are not logged In! {this.props.username}</Text>
    }
    return (
        <SafeAreaView style={styles.container}>

 
        <View style={styles.container}>
        <Text style={{margin:'10px', fontSize:'25px'}}>Welcome to Recipe App!</Text>
                    {name}
       {this.state.loggedIn ? <Button
              title={'Logout'}
              style={styles.input}
              onPress={this.onLogout.bind(this)}
            /> : 
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
           
        </View>
        </SafeAreaView>
    )
}
}

const mapStateToProps = (state) => {
    console.log(state);
  return{
    loggedIn: state.logUser.loggedIn,
    username: state.logUser.username
  }  
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);

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
  