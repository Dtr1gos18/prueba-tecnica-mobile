import { useQuery } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import pruebaTecnicaMobile from '../../../../prueba-tecnica-mobile.json';

const getSolicitudes = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return pruebaTecnicaMobile;
};

export const useCheckApp = () => {
    const solicitudesQuery = useQuery({
        queryKey: ['solicitudes', 'infinite'],
        queryFn: () =>
            getSolicitudes().catch((error: any) => {
                Toast.show({
                    type: 'error',
                    text1: 'Error al obtener solicitudes',
                    text2: error?.message || 'Hubo un problema al obtener las solicitudes.',
                    autoHide: true,
                    visibilityTime: 4000,
                });
            }),
        staleTime: 1000*60*60,
    });

    return {
        solicitudesQuery,
    };
};