import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import React from 'react';

const SearchProduct = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='What product are you looking for?'
        onChangeText={setText}
        value={text}
        style={styles.input}
      />
      <Button title='Search' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '50%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'sans-serif',
    color: 'grey',
  },
});

export default SearchProduct;
