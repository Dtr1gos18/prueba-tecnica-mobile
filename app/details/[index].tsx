import { ActivityIndicator, ScrollView, View } from 'react-native'
import React from 'react'
import TopBarTituloSolicitudes from '@/presentation/commons/components/TopBarTituloSolicitudes'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopbarNavigation from '@/presentation/theme/components/TopBarNavigation'
import TopBarTiempoTranscurrido from '@/presentation/details/components/TopBarTiempoTranscurrido'
import CardExtendida from '@/presentation/details/components/CardExtendida'
import { useLocalSearchParams } from 'expo-router'
import { useDetails } from '@/presentation/details/hooks/useDetails'

const DetailsSolicitud = () => {
    const { id } = useLocalSearchParams();
    const { detailsByIdQuery } = useDetails(`${id}`);

    if (detailsByIdQuery.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#FFFFFF' }}>
                <ActivityIndicator size={30} color="#4A01C4" />
            </View>
        );
    }

    const solucitudDetails = detailsByIdQuery.data!;

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <TopbarNavigation title='' showIconLeft={true} showIconRight={true} />
                    <TopBarTituloSolicitudes solicitudDetailsById={solucitudDetails} />
                    <TopBarTiempoTranscurrido />
                    <CardExtendida solicitudDetailsById={solucitudDetails} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailsSolicitud