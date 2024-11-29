import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DisplayBoards from '@/app/components/boardList';
import styles from './styles';

export const AllBoards: React.FC<{ navigation: any }> = ({ navigation }) => {

    return (
        <View style={styles.container}>
        <Text>All Boards</Text>
        <DisplayBoards navigation={navigation} />
        {
          // <TouchableOpacity
          //   style={styles.addButton}
          //   onPress={() => 
          //     navigation.navigate('CreateBoardScreen')
          //   }
          // >
          //   <Text style={styles.addButtonText}>+</Text>
          // </TouchableOpacity>
        }
        </View>
    );
};


export default AllBoards;