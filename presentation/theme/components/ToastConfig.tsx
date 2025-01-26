import React from 'react'
import { BaseToast, ErrorToast } from 'react-native-toast-message';

const ToastConfig = {
    success: (props: any) => (
        <BaseToast
            {...props}
            style={{ height: 'auto', borderLeftColor: 'green' }}
            text1Style={{
                fontWeight: 'bold',
                fontSize: 16,
            }}
            text2Style={{
                fontSize: 14,
            }}
            text2NumberOfLines={3}
            contentContainerStyle={{
                padding: 5
            }}
        />
    ),

    error: (props: any) => (
        <ErrorToast
            {...props}
            style={{ height: 'auto', borderLeftColor: 'red' }}
            text1Style={{
                fontWeight: 'bold',
                fontSize: 16
            }}
            text2Style={{
                fontSize: 14
            }}
            text2NumberOfLines={3}
            contentContainerStyle={{
                padding: 5
            }}
        />
    ),

    info: (props: any) => (
        <BaseToast
            {...props}
            style={{ height: 'auto', borderLeftColor: '#1672C4' }}
            text1Style={{
                fontWeight: 'bold',
                fontSize: 16,
            }}
            text2Style={{
                fontSize: 14,
            }}
            text2NumberOfLines={3}
            contentContainerStyle={{
                padding: 5
            }}
        />
    )
}

export default ToastConfig