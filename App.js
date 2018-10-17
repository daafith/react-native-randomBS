import React from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight, Share, Image, Platform, StatusBar} from 'react-native';
import adverbs from './assets/adverbs.json';
import verbs from './assets/verbs.json';
import adj from './assets/adjectives.json';
import nouns from './assets/nouns.json';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bs: 'Ready for some BS?'};
    }

    generateBs = () => {
        this.setState({
            bs: this.generate()
        })
    }

    generate() {
        return `${this.random(adverbs.adverbs)} ${this.random(verbs.verbs)} ${this.random(adj.adjectives)} ${this.random(nouns.nouns)}`;
    }

    random(arr) {
        var x = Math.floor((Math.random() * arr.length));
        return arr[x];
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
                {/*<Button buttonStyle={styles.submit} color={'#650e14'} onPress={this.generateBs} title={'Generate BS'}></Button>*/}
                <TouchableHighlight underlayColor={'transparent'} onPress={() => this.generateBs()}>
                    <Text style={styles.button}>
                        Generate BS
                    </Text>
                </TouchableHighlight>
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
    button: {
        height: 48,
        width: 'auto',
        lineHeight: 44,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#DDBB66',
        // font-family: MuseoSansRounded;
        fontSize: 16,
        color:'#FFF',
        backgroundColor: '#DDBB66',
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
