import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { render } from 'react-dom';


class FilterScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Filters'
    };

    render()
{
    return (
        <View style={styles.screen} >
            <Text>The Filter Screen!</Text>
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