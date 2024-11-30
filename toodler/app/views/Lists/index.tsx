import React from 'react';
import {View, ScrollView} from 'react-native';
import DisplayLists from '@/app/components/DisplayLists';
import styles from './styles';

type ListsScreenProps = {
    navigation: any;
    route: {
      params: {
        boardId: number;
      };
    };
  };

export const Lists: React.FC<ListsScreenProps> = ({ navigation, route }) => {
    const { boardId } = route.params;

    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.gridContainer}>
            <DisplayLists navigation={navigation} boardId={boardId}/>
          </ScrollView>
        </View>
      );
    };

export default Lists;