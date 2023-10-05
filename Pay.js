import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  Modal,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Pay() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pay, setPay] = useState('');

  const route = useRoute();
  const precioProducto = route.params.precio || '';
  const nombreProducto = route.params.nombre || '';

  const formatCreditCard = (input) => {
    const formattedInput = input.replace(/\D/g, '');

    const formattedCreditCard = formattedInput
      .match(/.{1,4}/g)
      ?.join('-')
      .slice(0, 19);

    return formattedCreditCard || '';
  };

  const handleTextChange = (text) => {
    const formattedText = formatCreditCard(text);
    setPay(formattedText);
  };

  const handlePayButtonClick = () => {
    console.log('Payment processed:', pay);
    setPay('');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ingresa tu tarjeta de crédito para comprar tu producto!
      </Text>
      <Text style={styles.text}>Nombre del producto: {nombreProducto}</Text>
      <Text style={styles.text}>Precio a pagar: {precioProducto}</Text>
      <TextInput
        placeholder='0000-0000-0000-0000'
        onChangeText={handleTextChange}
        value={pay}
        style={styles.input}
        keyboardType='numeric'
        maxLength={19}
      />
      <TouchableOpacity style={styles.button} onPress={handlePayButtonClick}>
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Compra realizada</Text>
            <Button title='Cerrar' onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'sans-serif',
    fontSize: 30,
    color: 'grey',
  },
  text: {
    marginBottom: 15,
    fontSize: 30,
    fontFamily: 'sans-serif',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'sans-serif',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
