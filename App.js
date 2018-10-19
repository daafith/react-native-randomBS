import React from "react";
import {View, Share, StatusBar} from "react-native";
import adverbs from "./assets/adverbs.json";
import verbs from "./assets/verbs.json";
import adjectives from "./assets/adjectives.json";
import nouns from "./assets/nouns.json";
import {Bullshit} from "./components/Bullshit";
import {Boss} from "./components/Boss";
import {ShareButton} from "./components/ShareButton";
import styles from "./styles"
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
                        <ShareButton onPress={() => this.onSharePress(this.state.bs)}/>
                    }
                </View>
            </View>
        );
    }
}
