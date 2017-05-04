# React Native CommonMark Markdown
Based on [Rexxars' implementation for React](https://github.com/rexxars/react-markdown). Also incorporating styles from [CharlesMangwa's React Native Simple Markdown](https://github.com/CharlesMangwa/react-native-simple-markdown?files=1).

## Installation
```
yarn add react-native-commonmark-markdown
```

## Usage
```js
import ReactNativeMarkdown from './react-native-commonmark-markdown';
var markdownToRender = '# This is a header!\n\nAnd this is a **paragraph**\n\n*Emphasis* is good.\n\n### Heading 3';

<ReactNativeMarkdown>{markdownToRender}</ReactNativeMarkdown>

```

### Props
