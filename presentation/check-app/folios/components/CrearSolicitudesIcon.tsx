import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const CrearSolicitudesIcon = () => {
    return (
        <View style={styles.crearSolicitud}>
            <Ionicons name="add-outline" size={45} color="#fff"/>
        </View>
    )
}

const styles = StyleSheet.create({
    crearSolicitud: {
        position: "absolute",
        left: "45%",
        top: "25%",
        width: 65,
        height: 65,
        backgroundColor: "#4A01C4",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    },
});

export default CrearSolicitudesIcon