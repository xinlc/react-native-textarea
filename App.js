/**
 * Example
 * Created by xinlc on 20/03/2018.
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Textarea from './Textarea';

type Props = {};
export default class App extends Component<Props> {
  state ={
    text: '',
  }

  onChange = (value) => {
    this.setState({ text: value });
  }

  render() {
    return (
      <View style={styles.container}>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={this.onChange}
            defaultValue={this.state.text}
            maxLength={120}
            placeholder={'好玩有趣的，大家同乐，伤感忧闷的，大家同哭。。。'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});
