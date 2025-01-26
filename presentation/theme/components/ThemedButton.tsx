import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Text, Pressable, PressableProps, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

interface Props extends PressableProps {
    children?: string;
    style?: StyleProp<ViewStyle>;
    icon?: string;
    librery?: 'FontAwesome' | 'FontAwesome6';
    iconSize?: number;
    iconColor?: string;
    textColor?: string;
    fontZise?: number;
}

const ThemedButton = ({ children, style, icon, librery, iconSize = 20, iconColor = 'white', textColor = 'white', fontZise = 14, ...rest }: Props) => {
    const buttonPrimary = useThemeColor({}, 'buttonPrimary');
    const Iconcomponent = librery === 'FontAwesome' ? FontAwesome : FontAwesome6;

    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? buttonPrimary + '90' : buttonPrimary,
                },
                styles.button,
                style,
            ]}
            {...rest}
        >
            <Text style={{ color: textColor, fontSize: fontZise }}>{children}</Text>

            {icon && (
                <Iconcomponent
                    name={icon as any}
                    size={iconSize}
                    color={iconColor}
                    style={{ marginHorizontal: 5 }}
                />
            )}
        </Pressable>
    );
};
export default ThemedButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});