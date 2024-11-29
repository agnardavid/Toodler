import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableHighlight, Image, Button, ScrollView} from 'react-native';
import DisplayBoards from '@/app/components/boardList';
import styles from './styles';

export const AllBoards: React.FC<{ navigation: any }> = ({ navigation }) => {

    return (
        <View style={styles.container}>
        <Text>All Boards</Text>
        <DisplayBoards navigation={navigation} />
        </View>
    );
};


export default AllBoards;