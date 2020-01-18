import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class FilterScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Categories'
    };

    render()
{
    return (
        <View style={styles.screen} >
            <Text>The Filter Screen! There will be 3 filter categories in this screen for meat, vegetarian and desert options.</Text>
        </View>
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

export default FilterScreen;