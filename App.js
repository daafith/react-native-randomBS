import React from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight, Share, Image, Platform, StatusBar} from 'react-native';
import data from './assets/bs.json';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bs: 'Ready for some BS?'};
    }

    generateBs = () => {
        var x = Math.floor((Math.random() * data.bs.length));
        this.setState({
            bs: data.bs[x]
        })
    }

    onSharePress = (text) => {
        var shareOptions = {
            message: text,
        }
        Share.share(shareOptions);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />
                <Button style={styles.submit} color={'#650e14'} onPress={this.generateBs} title={'Generate BS'}></Button>
                <Text style={styles.generatedBs}>{this.state.bs}</Text>
                <TouchableHighlight underlayColor={'transparent'}
                                    onPress={() => this.onSharePress(this.state.bs)}>
                    <Image
                        style={styles.share}
                        source={require('./assets/share.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#4F6D7A',
        alignItems: 'center',
    },
    submit: {
        width: 400,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#fff',
    },
    generatedBs: {
        marginTop: 20,
        marginBottom: 20,
        color: '#F5FCFF',
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'American Typewriter' : 'Roboto',
        textAlign: 'center'
    },
    share: {
        width: 26,
        height: 26
    }
});
