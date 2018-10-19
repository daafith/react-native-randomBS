import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, TouchableHighlight, Share, Image, Platform, StatusBar} from 'react-native';
import Balloon from "react-native-balloon";
import adverbs from './assets/adverbs.json';
import verbs from './assets/verbs.json';
import adjectives from './assets/adjectives.json';
import nouns from './assets/nouns.json';
import * as PropTypes from "prop-types";
const initialText = 'Tap me to generate some corporate bullshit. I have much nonsense to share, so tap all you want.';

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
                <Bullshit bs={this.state.bs}/>
                <View style={styles.imgView}>
                    <Boss onPress={() => this.generateBs()} source={require('./assets/boss.jpg')}/>
                    {
                        this.state.bs !== initialText &&
                        <ShareComponent onPress={() => this.onSharePress(this.state.bs)}/>
                    }
                </View>

            </View>
        );
    }
}

class Bullshit extends Component {
    render() {
        return <Balloon
            triangleDirection='bottom'
            triangleOffset='50%'
        >
            <Text style={styles.generatedBs}>{this.props.bs}</Text>
        </Balloon>;
    }
}

Bullshit.propTypes = {bs: PropTypes.any};

class Boss extends Component {
    render() {
        return <TouchableHighlight underlayColor={"transparent"}
                                   onPress={this.props.onPress}>
            <Image
                style={styles.boss}
                source={this.props.source}
            />
        </TouchableHighlight>;
    }
}

Boss.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.any
};

class ShareComponent extends Component {
    render() {
        return <FadeInView>
            <TouchableHighlight underlayColor={"transparent"} onPress={this.props.onPress}>
                <Text style={styles.button}>
                    Share
                </Text>
            </TouchableHighlight>
        </FadeInView>;
    }
}

ShareComponent.propTypes = {onPress: PropTypes.func};

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,
                }}
            >
                {this.props.children}
            </Animated.View>
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
        fontWeight: '400',
        color:'#405966',
        backgroundColor: '#DDBB66'
    },
    generatedBs: {
        marginTop: 15,
        marginBottom: 15,
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
        marginBottom: 15
    },
    share: {
        width: 26,
        height: 26
    }
});
