import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProductItem = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.productContainer} onPress={onPress}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.nombre}</Text>
      <Text style={styles.productPrice}>{product.precio}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    color: 'green',
  },
});

export default ProductItem;
