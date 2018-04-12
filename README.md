English | [简体中文](./README.zh-CN.md)

# react-native-textarea

[![npm package](https://img.shields.io/npm/v/react-native-textarea.svg?style=flat-square)](https://www.npmjs.org/package/react-native-textarea)
[![npm downloads](https://img.shields.io/npm/dt/react-native-textarea.svg)](https://www.npmjs.com/package/react-native-textarea)
[![build](https://img.shields.io/travis/xinlc/react-native-textarea.svg?style=flat-square)](https://travis-ci.org/xinlc/react-native-textarea)

React Native textarea component

## Example

![](./docs/ios.png)
![](./docs/android.jpg)

## Installation

1. Install package via npm:

```bash
$ npm install --save react-native-textarea
```

2. Include the library in your code:

```js
import Textarea from 'react-native-textarea';
```

3. Use the component:

```js
...
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
...

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
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});
```

## API

### Textarea

Properties | Descrition | Type | Default
-----------|------------|------|--------
| maxLength  |  limits the maximum number of characters that can be entered  | number   | `0` |
| containerStyle |  custom style  | Object  | - |

> More available `Textarea` API can be found at [react-native TextInput](http://facebook.github.io/react-native/docs/textinput.html)
