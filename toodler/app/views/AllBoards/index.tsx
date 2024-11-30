import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DisplayBoards from '@/app/components/BoardList';
import styles from './styles';
import AddBoardButton from '@/app/components/AddBoardButton';

export const AllBoards: React.FC<{ navigation: any }> = ({ navigation }) => {

    return (
        <View style={styles.container}>
        <Text>All Boards</Text>
        <DisplayBoards navigation={navigation} />
        <AddBoardButton navigation={navigation} />
        </View>
    );
};


export default AllBoards;