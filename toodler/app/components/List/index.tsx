import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import DeleteModal from '../deleteModal';
import DeleteListButton from '../DeleteListButton';
import EditListButton from '../EditListButton';
import { ListInterface, Task } from '@/app/Services/JsonInterpreter';

interface ListDisplay {
  id: number;
  name: string;
  color: string;
  navigation: any;
  boardId: number;
  tasks: Task[];
  setList: React.Dispatch<React.SetStateAction<ListInterface[]>>;
  onPress: () => void;
  label?: string;
}

// Component for rendering each board
export const EachList: React.FC<ListDisplay> = ({
  id,
  name,
  color,
  navigation,
  boardId,
  tasks,
  onPress,
  setList,
}) => {

    const filteredTasks = tasks.filter((task) => task.listId === id);
    console.log('Filtered Tasks:', filteredTasks);

    return (
        <TouchableOpacity
            style={[styles.listCard, { borderColor: color || '#dddddd' }]} 
            onPress={() => {
                console.log(`List card pressed for: ${name}`);
                navigation.navigate('TaskList', { listId: id });
            }}
            >

            <View style={styles.listHeader}>
                <Text style={styles.listTitle}>{name}</Text>
            </View>

            {/* Display tasks inside the box */}
            <View style={styles.cardContent}>
                {filteredTasks.slice(0, 3).map((task) => (
                <Text key={task.id} style={styles.taskText}>
                    • {task.name}
                </Text>
                ))}
                {filteredTasks.length > 3 && <Text style={styles.moreText}>...more tasks</Text>}
            </View>

            <EditListButton id={id} name={name} navigation={navigation}/>
            <DeleteListButton id={id} name={name} navigation={navigation} boardId={boardId}/>

        </TouchableOpacity>
  );
};

export default EachList;
