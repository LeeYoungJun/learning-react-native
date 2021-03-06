import React from 'react-native';
var {
  StyleSheet,
  TextInput,
  View
} = React;

import colors from './../styles/colors';
import {fonts} from './../styles/fonts';

var Input = React.createClass({
  propTypes: {
    onEntry: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func,
    style: View.propTypes.style,
    clearOnSubmit: React.PropTypes.bool
  },
  getInitialState() {
    return {
      text: ''
    };
  },
  getDefaultProps() {
    return {
      clearOnSubmit: true
    };
  },
  _create() {
    this.props.onEntry(this.state.text);
    this.setState(this.getInitialState());
  },
  _onSubmit(ev) {
    this.props.onEntry(ev.nativeEvent.text);
    if (!!this.props.clearOnSubmit) {
      this.setState(this.getInitialState());
    }
  },
  _onChange(text) {
    this.setState({text: text});
    if (this.props.onChange) {
      this.props.onChange(text);
    }
  },
  render() {
    return (
      <TextInput style={[styles.nameField, styles.wideButton, fonts.normal, this.props.style]}
        ref="newDeckInput"
        multiline={false}
        value={this.state.text}
        autoCorrect={false}
        onChangeText={this._onChange}
        onSubmitEditing={this._onSubmit}/>
      );
  }
});

export default Input;

var styles = StyleSheet.create({
  nameField: {
    backgroundColor: colors.tan,
    height: 60
  },
  wideButton: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    margin: 10
  }
});
