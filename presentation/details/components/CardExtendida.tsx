
import { CardExtend } from '@/core/details/interface/card-extend.interface';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { router } from 'expo-router';
import { View, StyleSheet } from 'react-native';

interface Props {
    solicitudDetailsById: CardExtend;
}

const CardExtendida = ({ solicitudDetailsById }: Props) => {
    return (
        <View style={styles.contenido}>
            <ThemedText type='title' style={{ fontSize: 18 }}>Descripcion</ThemedText>
            <ThemedText type='default' style={{ fontSize: 16, color: '#383838' }}>{solicitudDetailsById.descripcion}</ThemedText>
            <View style={styles.contentBotones}>
                <ThemedButton style={styles.botones} textColor='#383838' fontZise={16} librery="FontAwesome6" icon="shekel-sign" iconColor='#383838'>Evidencias</ThemedButton>
                <ThemedButton style={styles.botones} textColor='#383838' fontZise={16} librery="FontAwesome6" icon="arrow-right" iconColor='#383838'>Opciones avanzadas</ThemedButton>
                <ThemedButton style={styles.botones} textColor='#383838' fontZise={16} librery="FontAwesome6" icon="eye" iconColor='#383838'>Informe de folio</ThemedButton>
                <ThemedButton style={styles.botones} textColor='#383838' fontZise={16} librery="FontAwesome6" icon="arrow-right" iconColor='#383838' onPress={() => router.push(`/comments/[index]?id=${solicitudDetailsById.id}`)}>Comentarios</ThemedButton>
            </View>
            <View style={styles.contentHistorial}>
                <ThemedText type='title' style={{ fontSize: 18 }}>Historial</ThemedText>
            </View>
            <View style={styles.contentCotizacion}>
                <ThemedText type='title' style={{ fontSize: 20, color: '#4A01C4' }}>Pedir cotizacion</ThemedText>
                <ThemedText type='default' style={{ fontSize: 16, color: '#383838' }}>
                    <ThemedText type='defaultSemiBold' style={{ fontSize: 16, color: '#383838' }}>Proveedor: </ThemedText>{solicitudDetailsById.proveedor}
                </ThemedText>
                <View style={styles.contentCotizacionBotones}>
                    <ThemedButton style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4A01C4', borderRadius: 4 }} textColor='#4A01C4' fontZise={16}>Reasignar proveedor</ThemedButton>
                    <ThemedButton style={{ borderRadius: 4 }} fontZise={16}>Pedir cotizacion</ThemedButton>
                </View>
            </View >
        </View>
    )
}

export default CardExtendida

const styles = StyleSheet.create({
    contenido: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
    },
    contentBotones: {
        marginTop: 15,
        flexDirection: 'column',
        gap: 10,
    },
    botones: {
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.2)",
        width: '100%',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    contentHistorial: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
    },
    contentCotizacion: {
        marginTop: 15,
        boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 25,
    },
    contentCotizacionBotones: {
        marginTop: 7,
        flexDirection: 'column',
        gap: 5,
    }
});

