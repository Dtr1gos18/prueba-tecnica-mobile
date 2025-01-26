import { FontAwesome, Entypo } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet, View } from 'react-native';

export default function TabLayout() {
  type IconTabBarProps = {
    focused: boolean;
    iconName: keyof typeof FontAwesome.glyphMap | keyof typeof Entypo.glyphMap;
    library: 'FontAwesome' | 'Entypo';
  };

  const IconTabBar: React.FC<IconTabBarProps> = ({ focused, iconName, library }) => {
    const IconComponent = library === 'FontAwesome' ? FontAwesome : Entypo;

    return (
      <View style={[styles.iconContainer, focused && styles.focusedBackground]}>
        <IconComponent
          name={iconName as any}
          size={30}
          color={focused ? '#fff' : '#4A01C4'}
        />
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel
      }}
    >
      <Tabs.Screen
        name="(principal)/index"
        options={{
          title: "Principal",
          tabBarLabel: "Principal",
          tabBarIcon: ({ focused }) => (
            <IconTabBar
              focused={focused}
              iconName='home'
              library='FontAwesome'
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(agenda)/index"
        options={{
          title: "Agenda",
          tabBarLabel: "Agenda",
          tabBarIcon: ({ focused }) => (
            <IconTabBar
              focused={focused}
              iconName='calendar'
              library='Entypo'
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(tiendas)/index"
        options={{
          title: "Tiendas",
          tabBarLabel: "Tiendas",
          tabBarIcon: ({ focused }) => (
            <IconTabBar
              focused={focused}
              iconName='shop'
              library='Entypo'
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(a-folios)"
        options={{
          title: "Folios",
          tabBarLabel: "Folios",
          tabBarIcon: ({ focused }) => (
            <IconTabBar
              focused={focused}
              iconName='bug'
              library='Entypo'
            />
          ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 7,
    paddingHorizontal: 15,
    height: Platform.OS === 'ios' ? 90 : 70,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  focusedBackground: {
    position: 'absolute',
    bottom: 10,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#4A01C4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 10,
  },
  tabBarLabel: {
    paddingTop: 5,
    fontSize: 13,
    fontWeight: "600",
    color: "#4A01C4",
  },
});
