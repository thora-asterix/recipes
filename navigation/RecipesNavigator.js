import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MealDetailScreen from '../screens/MealDetailScreen';
import MainComponent from '../screens/MainComponent';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import VegitarianScreen from '../screens/VegitarianScreen';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';

const RecipesNavigator = createStackNavigator({
    Main: {
        screen: MainComponent,     
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#ffa500'
            },
            headerTitle: 'Recipes',
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    
    },
    
    // Categories: { 
    //     screen: CategoriesScreen
    // },
    // CategoryMeals: {
    //     screen: CategoryMealsScreen
    // },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#ffa500'
            },
            headerTitle: 'Favorites',
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
          
        })
    }
});

const FavoritesNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#ffa500'
            },
            headerTitle: 'Favorites',
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#ffa500'
            },
            headerTitle: 'Favorites',
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
          
        })
    }
})

const FiltersNavigator = createStackNavigator ({
    Filter: {
        screen: FiltersScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#ffa500'
            },
            headerTitle: 'Filter',
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
          
        })
    }

})


const RecipesFavTabNavigator = createBottomTabNavigator({
    Recipes: {
        screen: RecipesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' color={tabInfo.tintColor} size={25}></Ionicons>;
            }
        }
    },
    Categories: {
        screen: FiltersNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' color={tabInfo.tintColor} size={25}></Ionicons>;
            }
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' color={tabInfo.tintColor} size={25}></Ionicons>;
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#ffa500'
    }
})



// const MainNavigator = createDrawerNavigator({
//     Recipes: RecipesFavTabNavigator,
//     RecipeFavorites: { screen: RecipesFavTabNavigator},
//     Filters: FiltersNavigator
// });

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     drawerHeader: {
//         backgroundColor: '#5637DD',
//         height: 140,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flex: 1,
//         flexDirection: 'row'
//     },
//     drawerHeaderText: {
//         color: '#fff',
//         fontSize: 24,
//         fontWeight: 'bold'
//     },
//     drawerImage: {
//         margin: 10,
//         height: 60,
//         width: 60
//     },
//     stackIcon: {
//         marginLeft: 10,
//         color: '#fff',
//         fontSize: 24
//     }
// });

export default createAppContainer(RecipesFavTabNavigator);

