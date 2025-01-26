import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/presentation/theme/components/ThemedText'

const TopBarTiempoTranscurrido = () => {
  return (
    <View style={styles.container}>
      <ThemedText type='title' style={{ color: '#fff', fontSize: 20 }}>15 Dias Transcurridos</ThemedText>
    </View>
  )
}

export default TopBarTiempoTranscurrido

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: '#EC6666'
    },
});