import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/presentation/theme/components/ThemedText'
import ThemedButton from '@/presentation/theme/components/ThemedButton'

const ComentariosSolicitud = () => {
  return (
    <View style={styles.contenido}>
      <View style={styles.comentarios}>
        <View style={styles.contentComentario} >
          <View style={styles.user}>
            <ThemedText type='default'>Luis Alberto Garcia</ThemedText>
          </View>
          <ThemedText type='defaultSemiBold' style={{fontSize: 16}}>Mensaje de prueba y descriptivo sobre la solicitud de mantenimiento</ThemedText>
          <View style={styles.fecha}>
            <ThemedText type='default' style={{color: '#4A01C4'}}>01/11/2024 03:30pm</ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.comentarioUser}>
        <ThemedText style={styles.text} type='default'>Comentario...</ThemedText>
        <ThemedButton style={styles.send} librery='FontAwesome' icon='send' iconColor='#fff' iconSize={20}></ThemedButton>
      </View>
    </View>
  )
}

export default ComentariosSolicitud

const styles = StyleSheet.create({
  contenido: {
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  comentarios: {
    height: '70.5%',
    flexDirection: 'column',
    gap: 10,
  },
  contentComentario: {
    backgroundColor: '#fff',
    boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.2)",
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  user: {
    alignItems: 'flex-start',
    paddingTop: 3,
    paddingBottom: 3,
  },
  fecha: {
    alignItems: 'flex-end',
    paddingTop: 3,
    paddingBottom: 3,
  },
  comentarioUser:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    backgroundColor: '#fff',
    boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.2)",
    width: '80%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 20,
  },
  send: {
    paddingHorizontal: 20,
    width: '20%',
    height: '100%',
    borderRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.2)",
  }
});