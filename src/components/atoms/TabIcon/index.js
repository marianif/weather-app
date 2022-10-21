import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { colors } from '../../../theme';

const TabIcon = ({ name, focused }) => {
  return (
    <Icon name={name} size={28} color={focused ? colors.primary : 'gray'} />
  );
};

export default TabIcon;
