import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { render } from 'react-dom';


class VegitarianScreen extends Component {
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
            <Text>The Vegiterian Screen!</Text>
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

export default VegitarianScreen;