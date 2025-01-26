import { ActivityIndicator, ScrollView, View } from 'react-native'
import React from 'react'
import TopbarNavigation from '@/presentation/theme/components/TopBarNavigation'
import TopBarTituloSolicitudes from '@/presentation/commons/components/TopBarTituloSolicitudes'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardMoreExtendida from '@/presentation/more-details/components/CardMoreExtendida'
import { useLocalSearchParams } from 'expo-router'
import { useMoreDetails } from '@/presentation/more-details/hooks/useMoreDetails'

const MoreDetailsSolicitud = () => {
    const { id } = useLocalSearchParams();
    const { moreDetailsByIdQuery } = useMoreDetails(`${id}`);

    if (moreDetailsByIdQuery.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#FFFFFF' }}>
                <ActivityIndicator size={30} color="#4A01C4" />
            </View>
        );
    }

    const solucitudMoreDetails = moreDetailsByIdQuery.data!;

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <TopbarNavigation title='' showIconLeft={true} showIconRight={true} />
                    <TopBarTituloSolicitudes solicitudDetailsById={ solucitudMoreDetails } />
                    <CardMoreExtendida solicitudMoreDetailsById={solucitudMoreDetails}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MoreDetailsSolicitud