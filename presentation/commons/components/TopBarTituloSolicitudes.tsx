import { View, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { MaterialIcons } from '@expo/vector-icons';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { CardExtend } from '@/core/details/interface/card-extend.interface';

interface Props {
    solicitudDetailsById: CardExtend;
}

const TopBarTituloSolicitudes = ({ solicitudDetailsById }: Props) => {
    const router = useRouter();
    const params  = useLocalSearchParams();
    const isVerMas = params.expanded === 'true';

    const handleButtonClick = () => {
        if (isVerMas) {
            router.push({ pathname: '/details/[index]', params: { id: solicitudDetailsById.id, expanded: 'false', index: solicitudDetailsById.id } });
        } else {
            router.push({ pathname: '/more-details/[index]', params: { id: solicitudDetailsById.id, expanded: 'true', index: solicitudDetailsById.id } });
        }
    };
    return (
        <LinearGradient
            colors={['#4A01C4', '#8D27EE']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradientContainer}
        >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                <ThemedText
                    style={{ fontSize: 14, backgroundColor: "#EC6666", borderRadius: 20, paddingVertical: 4, paddingHorizontal: 12 }}
                    type="estado"
                >
                    {solicitudDetailsById.prioridad}
                </ThemedText>
                <ThemedText
                    style={{ fontSize: 14, color: "#4A01C4", backgroundColor: "#fff", borderWidth: 1, borderColor: "#4A01C4", borderRadius: 20, paddingVertical: 4, paddingHorizontal: 12 }}
                    type="estado"
                >
                    {solicitudDetailsById.estado}
                </ThemedText>
            </View>
            <View style={{ marginTop: 15 }}>
                <ThemedText type="title" style={{ color: '#fff', fontSize: 20 }}>
                    <ThemedText type='title' style={{ color: '#fff', fontSize: 20 }}>#{solicitudDetailsById.id}</ThemedText> - {solicitudDetailsById.titulo}
                </ThemedText>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 7 }}>
                <ThemedText
                    style={{ backgroundColor: "#4A01C4", borderRadius: 20, paddingVertical: 4, paddingHorizontal: 12, fontSize: 14 }}
                    type="estado"
                >
                    Correctiva
                </ThemedText>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ThemedButton style={{ backgroundColor: 'transparent', paddingHorizontal: 5 }} onPress={handleButtonClick}>{isVerMas ? 'Ver menos' : 'Ver mas'}</ThemedButton>
                    <MaterialIcons
                        name={isVerMas ? 'keyboard-double-arrow-left' : 'keyboard-double-arrow-right'}
                        size={24}
                        color={'#fff'}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}

export default TopBarTituloSolicitudes

const styles = StyleSheet.create({
    gradientContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
});