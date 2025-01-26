import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopbarNavigation from '@/presentation/theme/components/TopBarNavigation'
import TopBarTituloSolicitudes from '@/presentation/commons/components/TopBarTituloSolicitudes'
import { useLocalSearchParams } from 'expo-router'
import { useDetails } from '@/presentation/details/hooks/useDetails'
import ComentariosSolicitud from '@/presentation/comments/components/ComentariosSolicitud'

const CommentsSolicitud = () => {
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
            <View>
                <TopbarNavigation title='' showIconLeft={true} showIconRight={true} />
                <TopBarTituloSolicitudes solicitudDetailsById={solucitudDetails} />
                <ComentariosSolicitud />
            </View>
        </SafeAreaView>
    )
}

export default CommentsSolicitud