import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import CrearSolicitudesIcon from './CrearSolicitudesIcon';

const TopBarFiltros = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={styles.tipoFiltro}>
                    <Text style={styles.textPrincipal}>Filtrar por</Text>
                    <FontAwesome5 name="filter" size={12} color="#515151" />
                </View>
                <CrearSolicitudesIcon />
                <View style={styles.tipoFiltro}>
                    <Text style={styles.textPrincipal}>Ordenar por</Text>
                    <FontAwesome name="sort-amount-desc" size={12} color="#515151" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 45,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    rowContainer: {
        flexDirection: "row",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
    },
    tipoFiltro: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    textPrincipal: {
        fontSize: 13,
        color: "#515151",
        fontWeight: "bold",
        paddingLeft: 7,
    },
});

export default TopBarFiltros