import { useQuery } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import pruebaTecnicaMobile from '../../../prueba-tecnica-mobile.json';

const getDetailsById = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const solicitud = pruebaTecnicaMobile.find((item: { id: string }) => item.id === id);
    if (!solicitud) {
        throw new Error('Solicitud no encontrada');
    }
    return solicitud;
};

export const useDetails = (id: string) => {
    const detailsByIdQuery = useQuery({
        queryKey: ['solicitudes', String(id)],
        queryFn: async () => {
            try {
                return await getDetailsById(id);
            } catch (error: any) {
                Toast.show({
                    type: 'error',
                    text1: 'Error al obtener los detalles de la solicitud.',
                    text2: error?.message || 'Hubo un problema al obtener los detalles de la solicitud.',
                    autoHide: true,
                    visibilityTime: 4000,
                });
                throw error;
            }
        },
        staleTime: 1000*60*60,
    });

    return {
        detailsByIdQuery,
    };
};