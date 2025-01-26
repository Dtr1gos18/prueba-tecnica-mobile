import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const TopBarTiendas = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.rowContainer}>
        <Entypo name="shop" size={20} color="#fff" />
        <Text style={styles.textPrincipal}>Todas las tiendas</Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Entypo name="chevron-right" size={30} color="#fff" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    backgroundColor: "#4A01C4",
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  textPrincipal: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 7,
  },
});

export default TopBarTiendas