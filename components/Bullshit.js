import React, {Component} from "react";
import Balloon from "react-native-balloon";
import {Text} from "react-native";
import * as PropTypes from "prop-types";
import styles from "../styles";

export class Bullshit extends Component {
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
