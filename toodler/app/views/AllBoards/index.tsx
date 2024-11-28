import React from 'react';
import {View, Text, TextInput, TouchableHighlight, Image, Button, ScrollView} from 'react-native';
import CreateBoardButton from '@/app/components/createBoardButton/index';
import Boards from '@/app/components/boardList';
import styles from './styles';

const AllBoards = () => {
    const boards = Boards(); // This will give you the boards to display

    return (
        <View style={styles.container}>
            <Text >All Boards</Text>
            
            <ScrollView>
                {boards.map(board => (
                    <View key={board.id}>
                        <Image source={{ uri: board.thumbnailPhoto }} />
                        <View >
                            <Text>{board.name}</Text>
                            <Text >{board.description}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <CreateBoardButton />
        </View>
    );
};


export default AllBoards;