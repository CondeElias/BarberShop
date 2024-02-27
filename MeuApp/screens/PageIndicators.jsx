import React from 'react';
import { View, StyleSheet } from 'react-native';

const PageIndicators = ({ totalPages, currentPage }) => {
  return (
    <View style={styles.container}>
      {[...Array(totalPages).keys()].map((index) => (
        <View
          key={index}
          style={[
            styles.pageIndicator,
            index === currentPage ? styles.currentPage : null,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-arround',
    alignItems: 'center',
    marginBottom: 0,
  },
  pageIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 5,
  },
  currentPage: {
    backgroundColor: 'white', // Cor da bolinha preenchida
  },
});

export default PageIndicators;