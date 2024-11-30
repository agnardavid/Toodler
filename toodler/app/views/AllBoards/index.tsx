import React from 'react';
import {View, ScrollView} from 'react-native';
import DisplayBoards from '@/app/components/BoardList';
import styles from './styles';
import AddBoardButton from '@/app/components/AddBoardButton';

export const AllBoards: React.FC<{ navigation: any }> = ({ navigation }) => {

    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.gridContainer}>
            <DisplayBoards navigation={navigation} />
            <AddBoardButton navigation={navigation} />
          </ScrollView>
        </View>
      );
    };

export default AllBoards;