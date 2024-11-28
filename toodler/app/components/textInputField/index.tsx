import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

interface TextInProps {
    placeholder: string;
  }
  
  const TextIn: React.FC<TextInProps> = ({ placeholder }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
        />
    );
};

export default TextIn;

