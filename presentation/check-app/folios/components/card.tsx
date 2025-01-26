import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/presentation/theme/components/ThemedText'
import ThemedButton from '@/presentation/theme/components/ThemedButton'
import { router } from 'expo-router'
import { CardList } from '@/core/check-app/interface/card-list.interface'
import { formatDate } from '@/core/utils/dateFormater'

interface Props {
    solicitud: CardList;
} 

const card = ({solicitud}: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerBody}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                    <ThemedText
                        type="numberSolicitud"
                    >
                        # {solicitud.id}
                    </ThemedText>
                    <ThemedText
                        style={{ backgroundColor: "#4A01C4", borderRadius: 20, paddingVertical: 2, paddingHorizontal: 7 }}
                        type="estado"
                    >
                        Correctivo
                    </ThemedText>
                </View>
                <View style={{ marginTop: 5, width: "70%" }}>
                    <ThemedText
                        type="title"
                    >
                        {solicitud.titulo}
                    </ThemedText>
                </View>
                <View style={{ marginTop: 2, flexDirection: "row", alignItems: "center", gap: 4 }}>
                    <ThemedText
                        style={{ backgroundColor: "#EC6666", borderRadius: 20, paddingVertical: 2, paddingHorizontal: 7 }}
                        type="estado"
                    >
                        {solicitud.prioridad}
                    </ThemedText>
                    <ThemedText
                        style={{ color: "#4A01C4", borderWidth: 1, borderColor: "#4A01C4", borderRadius: 20, paddingVertical: 2, paddingHorizontal: 7 }}
                        type="estado"
                    >
                        {solicitud.estado}
                    </ThemedText>
                </View>
                <View style={{ marginTop: 2}}>
                    <ThemedText type="default">
                        <ThemedText type='defaultSemiBold'>Solicitada el: </ThemedText>{formatDate(solicitud.fechaSolicitud)}
                    </ThemedText>
                </View>
                <View style={{ marginTop: 15}}>
                <ThemedText type="default">
                    <ThemedText type='defaultSemiBold'>Area: </ThemedText>{solicitud.area}
                </ThemedText>
                <ThemedText type="default">
                    <ThemedText type='defaultSemiBold'>Departamento: </ThemedText>{solicitud.departamento}
                </ThemedText>
                <ThemedText type="default">
                    <ThemedText type='defaultSemiBold'>Unidad: </ThemedText>{solicitud.unidad}
                </ThemedText>
                </View>
                <View style={{ marginTop: 15}}>
                <ThemedText type="default">
                    <ThemedText type='defaultSemiBold'>Creador: </ThemedText>{solicitud.creador}
                </ThemedText>
                <ThemedText type="default">
                    <ThemedText type='defaultSemiBold'>Proveedor: </ThemedText>{solicitud.proveedor}
                </ThemedText>
                <ThemedText type="default">
                    <ThemedText type='defaultSemiBold'>Solucionador: </ThemedText>{solicitud.solucionador}
                </ThemedText>
                </View>
                <ThemedButton style={{ marginTop: 15 }} onPress={() => router.push(`/details/[index]?id=${solicitud.id}`)}>Ver detalle</ThemedButton>
            </View>
        </View>
    )
}

export default card

const styles = StyleSheet.create({
    container: {
        width: "78%",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        boxShadow: "0 5px 10px 1px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#ffffff",
    },
    containerBody: {
        width: "88%",
        paddingVertical: 20,
    },
})