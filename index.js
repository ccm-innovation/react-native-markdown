import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image
} from 'react-native'
import CommonMark from 'commonmark';
import styles from './styles';
import ReactNativeRenderer from './commonmark-react-renderer';

export default class ReactNativeMarkdown extends React.Component {
  render() {
    let parser = new CommonMark.Parser();
    let renderer = new ReactNativeRenderer({
      skipHtml: true,
      allowedTypes: [
        'heading',
        'text',
        'paragraph',
        'strong',
        'emph',
        'list',
        'item',
        'image',
        'link',
        'code_block',
        'block_quote'
      ],
      renderers: {
        heading: View,
        paragraph: Text,
        text: Text,
        strong: Text,
        emph: Text,
        list: View,
        item: Text,
        image: Image,
        link: Text,
        code_block: Text,
      },
    });
    var ast = parser.parse(this.props.children || '');
    var children = renderer.render(ast);
    return <ScrollView>{children}</ScrollView>
  }
}
