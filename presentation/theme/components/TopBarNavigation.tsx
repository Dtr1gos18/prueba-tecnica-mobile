import { useNavigation } from "expo-router";
import {
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import ThemedButton from "./ThemedButton";

interface Props extends PressableProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  showIconRightProfile?: boolean;
  showIconRight?: boolean;
  showIconLeft?: boolean;
}

const TopbarNavigation = ({title = "", style, showIconRightProfile, showIconRight, showIconLeft, ...rest}: Props) => {

  const navigation = useNavigation();

  return (
    <View style={[styles.topContainer, style]}>
      <View style={styles.rowContainer}>
        {showIconLeft && (
          <View style={{}}>
            <ThemedButton
              style={{
                backgroundColor: "transparent",
                paddingHorizontal: 0,
                paddingVertical: 0,
              }}
              librery="FontAwesome6"
              icon="arrow-left"
              iconSize={25}
              iconColor="#fff"
              onPress={() => navigation.goBack()}
            ></ThemedButton>
          </View>
        )}
        <View>
          <Text style={styles.textPrincipal}>{title}</Text>
        </View>
        {showIconRightProfile && (
          <View style={{ flex: 1,  flexDirection: "row", justifyContent: "flex-end", gap: 3 }}>
            <ThemedButton
              style={{
                backgroundColor: "transparent",
                paddingHorizontal: 0,
                paddingVertical: 0,
              }}
              librery="FontAwesome"
              icon="user-circle"
              iconSize={25}
              iconColor="#fff"
            ></ThemedButton>
            <ThemedButton
              style={{
                backgroundColor: "transparent",
                paddingHorizontal: 0,
                paddingVertical: 0,
              }}
              librery="FontAwesome"
              icon="bell"
              iconSize={25}
              iconColor="#fff"
            ></ThemedButton>
          </View>
        )}
        {showIconRight && (
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <ThemedButton
              style={{
                backgroundColor: "transparent",
                paddingHorizontal: 0,
                paddingVertical: 0,
              }}
              librery="FontAwesome"
              icon="bell-o"
              iconSize={25}
              iconColor="#fff"
            ></ThemedButton>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#313131",
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  textPrincipal: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TopbarNavigation;
