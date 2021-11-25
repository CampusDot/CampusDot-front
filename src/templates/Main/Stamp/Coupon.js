import React from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Header from 'components/Header';

const couponLists = [
  {
    title: '황소곱창',
    stamp: 3,
  },
  {
    title: '부추곱창',
    stamp: 3,
  },
  {
    title: '천사곱창',
    stamp: 3,
  },
  {
    title: '공복',
    stamp: 3,
  },
  {
    title: '대명고기',
    stamp: 3,
  },
];

const Coupon = () => {
  return (
    <>
      <Header back title="쿠폰" />
      <FlatList
        data={couponLists}
        keyExtractor={(_) => _.title}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const { stamp, title } = item;
          return (
            <TouchableOpacity style={styles.container}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.stamp}>도장 {stamp}개</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text>zz</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347,
    height: 176,
    borderWidth: 1,
    marginTop: 16,
  },
  title: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  stamp: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
});

export default Coupon;
