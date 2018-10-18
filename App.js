import React from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight, Share, Image, Platform, StatusBar} from 'react-native';
import adverbs from './assets/adverbs.json';
import verbs from './assets/verbs.json';
import adjectives from './assets/adjectives.json';
import nouns from './assets/nouns.json';
const initialText = 'Ready for some BS?';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bs: initialText};
    }

    generateBs = () => {
        this.setState({
            bs: this.formattedBs()
        })
    };

    formattedBs() {
        return `${this.randomElement(adverbs.a)} ${this.randomElement(verbs.v)} ${this.randomElement(adjectives.a)} ${this.randomElement(nouns.n)}`;
    }

    randomElement(arr) {
        const x = Math.floor((Math.random() * arr.length));
        return arr[x];
    }

    onSharePress = (text) => {
        const shareOptions = {
            message: text,
        };
        Share.share(shareOptions);
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#fff"
                />
                <TouchableHighlight underlayColor={'transparent'} onPress={() => this.generateBs()}>
                    <Text style={styles.button}>
                        Generate BS
                    </Text>
                </TouchableHighlight>
                <Text style={styles.generatedBs}>{this.state.bs}</Text>
                <View style={styles.imgView}>
                    <Image
                        style={styles.boss}
                        source={require('./assets/boss.jpg')}
                    />
                    {
                        this.state.bs !== initialText &&
                        <TouchableHighlight underlayColor={'transparent'}
                                            onPress={() => this.onSharePress(this.state.bs)}>
                            <Image
                                style={styles.share}
                                source={require('./assets/share.png')}
                            />
                        </TouchableHighlight>
                    }
                </View>

            </View>
        );
    }
}

function getFont() {
    return Platform.OS === 'ios' ? 'American Typewriter' : 'Roboto';
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        height: 48,
        width: 'auto',
        lineHeight: 44,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
        fontFamily: getFont(),
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#DDBB66',
        fontSize: 16,
        fontWeight: '600',
        color:'#405966',
        backgroundColor: '#DDBB66',
    },
    generatedBs: {
        marginTop: 20,
        marginBottom: 20,
        color: '#405966',
        fontSize: 16,
        fontFamily: getFont(),
        textAlign: 'center'
    },
    imgView: {
        flex: 1,
        top: 0,
        left: 0,
        alignItems: 'center'
    },
    boss: {
        resizeMode: 'contain',
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 30
    },
    share: {
        width: 26,
        height: 26
    }
});
