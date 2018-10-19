import React, {Component} from "react";
import {Animated, Text, TouchableHighlight} from "react-native";
import styles from "../styles";
import * as PropTypes from "prop-types";

export class ShareButton extends Component {
    render() {
        return <FadeIntoView>
            <TouchableHighlight underlayColor={"transparent"} onPress={this.props.onPress}>
                <Text style={styles.button}>
                    Share
                </Text>
            </TouchableHighlight>
        </FadeIntoView>;
    }
}

ShareButton.propTypes = {onPress: PropTypes.func};

class FadeIntoView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 800,
            }
        ).start();
    }

    render() {
        let {fadeAnim} = this.state;

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