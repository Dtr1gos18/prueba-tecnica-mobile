import { ActivityIndicator, useWindowDimensions, View } from 'react-native'
import React from 'react'
import TopbarNavigation from '@/presentation/theme/components/TopBarNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBarTiendas from '@/presentation/check-app/folios/components/TopBarTiendas'
import TopBarFiltros from '@/presentation/check-app/folios/components/TopBarFiltros'
import SolicitudesList from '@/presentation/check-app/folios/components/SolicitudesList'
import { useCheckApp } from '@/presentation/check-app/folios/hooks/useCheckApp'

const ScreenInicial = () => {
    const { height } = useWindowDimensions();
    const { solicitudesQuery } = useCheckApp();

    if (solicitudesQuery.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#FFFFFF' }}>
                <ActivityIndicator size={30} color="#4A01C4" />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginBottom: 170 }}>
                <TopbarNavigation title='Check+' showIconRightProfile={true} />
                <TopBarTiendas />
                <TopBarFiltros />
                <View style={{ height: height * 0.03 }} />
                {solicitudesQuery.data ? <SolicitudesList listSolicitudes={solicitudesQuery.data} /> : null}
            </View>
        </SafeAreaView>
    )
}

export default ScreenInicial