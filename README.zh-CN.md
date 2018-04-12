[English](./README.md) | 简体中文

# react-native-textarea

[![npm package](https://img.shields.io/npm/v/react-native-textarea.svg?style=flat-square)](https://www.npmjs.org/package/react-native-textarea)
[![npm downloads](https://img.shields.io/npm/dt/react-native-textarea.svg)](https://www.npmjs.com/package/react-native-textarea)
[![build](https://img.shields.io/travis/xinlc/react-native-textarea.svg?style=flat-square)](https://travis-ci.org/xinlc/react-native-textarea)

React Native textarea component

## 运行效果

![](./docs/ios.png)
![](./docs/android.jpg)

## 安装和使用

1. 使用`npm`安装:

```bash
$ npm install --save react-native-textarea
```

2. 导入组件:

```js
import Textarea from 'react-native-textarea';
```

3. 使用组件:

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

属性 | 说明 | 类型 | 默认值
-----------|------------|------|--------
| maxLength  |  最大长度  | number   | `0` |
| containerStyle |  组件样式  | Object  | - |

> 更多 `Textarea` 属性请参考 [react-native TextInput](http://facebook.github.io/react-native/docs/textinput.html)
