import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import styles from './styles';

const Header: React.FC<StackHeaderProps> = ({ navigation, route, options }) => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.canGoBack() && navigation.goBack()}>
          <Text style={styles.backButton}>{"< Back"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{options?.title || route.name}</Text>
      </View>
    );
};
  
export default Header;
  