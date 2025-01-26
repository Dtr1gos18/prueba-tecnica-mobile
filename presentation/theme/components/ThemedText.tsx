import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'numberSolicitud' | 'estado';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'default' ? styles.default : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'numberSolicitud' ? styles.numberSolicitud : undefined,
        type === 'estado' ? styles.estado : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  default: {
    fontSize: 14,
    color: '#828282'
  },
  defaultSemiBold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#707070'
  },
  link: {
    fontSize: 14,
    color: 'white',
  },
  numberSolicitud: {
    fontSize: 12,
    color: '#828282'
  },
  estado: {
    fontSize: 12,
    color: 'white'
  }

});
