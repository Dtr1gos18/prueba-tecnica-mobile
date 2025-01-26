import { View, StyleSheet } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'
import React, { useState } from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { ThemedText } from '@/presentation/theme/components/ThemedText'
import { CardMoreDetails } from '@/core/more-details/interface/card-more-details.interface'
import { formatDate } from '../../../core/utils/dateFormater';

interface Props {
    solicitudMoreDetailsById: CardMoreDetails;
} 

const CardMoreExtendida = ({ solicitudMoreDetailsById }: Props) => {
    const [value, setValue] = useState('1');

    const calculateTimeDifference = (start: string, end: string) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const diffInMs = endDate.getTime() - startDate.getTime();
        const diffInMinutes = Math.floor(diffInMs / 60000);
        return diffInMinutes > 0 ? `${diffInMinutes} minutos` : 'Tiempo inválido';
    };

    const timeDifference = calculateTimeDifference(
        solicitudMoreDetailsById.fechaSolicitud,
        solicitudMoreDetailsById.fechaTerminacion
    );

    return (
        <View style={styles.contenido}>
            <View style={styles.botones}>
                <View style={{ backgroundColor: '#4A01C4', padding: 10, borderRadius: 50 }}>
                    <Ionicons name="mail" size={35} color="#fff"/>
                </View>
                <View style={{ backgroundColor: '#4A01C4', padding: 15, borderRadius: 50 }}>
                    <FontAwesome5 name="phone-alt" size={25} color="#fff"/>
                </View>
                <View style={{ backgroundColor: '#EC6666', padding: 10, borderRadius: 50 }}>
                    <Ionicons name="reload-circle" size={35} color="#fff"/>
                </View>
            </View>
            <View style={styles.contentTime}>
                <View style={[styles.contentTextDate, { borderRightWidth: 1, borderColor: '#E1E1E1', paddingLeft: 20, paddingRight: 10 }]}>
                    <ThemedText type='default' style={styles.text}>creado por {solicitudMoreDetailsById.creador}</ThemedText>
                    <ThemedText type='defaultSemiBold' style={styles.text}>{formatDate(solicitudMoreDetailsById.fechaSolicitud)}</ThemedText>
                </View>
                <View style={[styles.contentTextDate, { paddingRight: 20, paddingLeft: 10 }]}>
                    <ThemedText type='default' style={styles.text}>Aprovado por {solicitudMoreDetailsById.solucionador}</ThemedText>
                    <ThemedText type='defaultSemiBold' style={styles.text}>{formatDate(solicitudMoreDetailsById.fechaTerminacion)}</ThemedText>
                </View>
                <View style={{ position: 'absolute', left: '35%', top: '85%', zIndex: 1, backgroundColor: '#5E5E5E', padding: 6, borderRadius: 30 }}>
                    <ThemedText style={{ fontSize: 17, color: '#fff' }}>{timeDifference}</ThemedText>
                </View>
            </View>
            <View style={{ marginTop: 25 }}>
                <ThemedText type='title' style={{ fontSize: 20 }}>Involucrados</ThemedText>
                <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Jefe directo:</ThemedText>
                <ThemedText type='default' style={{ fontSize: 17 }}>{solicitudMoreDetailsById.jefeDirecto}</ThemedText>
                <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Usuario asignados</ThemedText>
                <ThemedText type='default' style={{ fontSize: 17 }}>{solicitudMoreDetailsById.usuariosAsignados}</ThemedText>
            </View>
            <View style={{ marginTop: 25 }}>
                <ThemedText type='title' style={{ fontSize: 20 }}>Zona de gestion</ThemedText>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Unidad - ID</ThemedText>
                        <ThemedText type='default' style={{ fontSize: 17 }}>{solicitudMoreDetailsById.id} - {solicitudMoreDetailsById.unidad}</ThemedText>
                    </View>
                    <View style={{ marginRight: 30 }}>
                        <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Area:</ThemedText>
                        <ThemedText type='default' style={{ fontSize: 17 }}>{solicitudMoreDetailsById.area}</ThemedText>
                    </View>
                </View>
                <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Departamento</ThemedText>
                <ThemedText type='default' style={{ fontSize: 17 }}>{solicitudMoreDetailsById.departamento}</ThemedText>
            </View>
            <View style={{ marginTop: 25 }}>
                <ThemedText type='title' style={{ fontSize: 20 }}>Categorizacion</ThemedText>
                <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Acabados</ThemedText>
                <ThemedText type='default' style={{ fontSize: 17 }}>{solicitudMoreDetailsById.acabados}</ThemedText>
                <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Electricidad</ThemedText>
                <ThemedText type='default' style={{ fontSize: 17 }}>{solicitudMoreDetailsById.electricidad}</ThemedText>
            </View>
            <View style={{ marginTop: 25 }}>
                <ThemedText type='title' style={{ fontSize: 20 }}>Cuestionario</ThemedText>
                <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Nombre</ThemedText>
                <ThemedText type='default' style={{ fontSize: 17 }}>{solicitudMoreDetailsById.nombreCuestionario}</ThemedText>
                <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Pregunta</ThemedText>
                <ThemedText type='default' style={{ fontSize: 17 }}>{solicitudMoreDetailsById.pregunta}</ThemedText>
                <ThemedText type='defaultSemiBold' style={{ marginTop: 7, fontSize: 17 }}>Respuesta</ThemedText>
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <View style={styles.radioRow}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <View key={item} style={styles.radioItem}>
                            <RadioButton value={item.toString()} />
                            <Text>{item}</Text>
                        </View>
                    ))}
                </View>
            </RadioButton.Group>
            </View>
        </View>
    )
}

export default CardMoreExtendida

const styles = StyleSheet.create({
    contenido: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 45,
        backgroundColor: '#fff',
    },
    botones: {
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 50,
    },
    contentTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: '#E1E1E1',
    },
    contentTextDate: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 17,
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
        flexWrap: 'wrap',
        paddingTop: 2,
    },
    radioRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});