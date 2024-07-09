import React from 'react';
import {Text, View} from 'react-native'
import { Icon } from 'react-native-elements';
import { Fonts } from '../../theme';

export const CaptionedText = ({
  heading,
  text,
  headingIcon,
  textIcon,
  direction = 'column', // 'row' or 'column', default is column
  style,
  textStyle
}) => (
  <View style={[{
    flexDirection: direction,
  }, 
  style]}>
    <View style={[{ flexDirection: 'row', alignItems: 'center' },
        direction === 'row' ? { marginRight: 20 } : {},
    ]}>
      {headingIcon && <Icon name={headingIcon} type='simple-line-icon' size={20} style={{ marginRight: 10 }} />}
      <Text style={[Fonts.bold]}>{heading}</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {textIcon && <Icon name={textIcon} type='simple-line-icon' size={20}style={{ marginRight: 10 }} />}
      <Text style={textStyle}>{text}</Text>
    </View>
  </View>
);
