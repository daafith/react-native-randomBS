import React, {Component} from "react";
import {Image, TouchableHighlight} from "react-native";
import styles from "../styles";
import * as PropTypes from "prop-types";

export class Boss extends Component {
    render() {
        return (
            <TouchableHighlight underlayColor={"transparent"}
                                onPress={this.props.onPress}>
                <Image
                    style={styles.boss}
                    source={this.props.source}
                />
            </TouchableHighlight>
        );
    }
}

Boss.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.any
};