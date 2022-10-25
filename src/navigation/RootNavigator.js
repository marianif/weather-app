import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import { Search, Location } from '../screen';
import { Dimensions, Pressable, StyleSheet, View, Text } from 'react-native';
import { colors } from '../theme';
import { TabIcon } from '../components/atoms';
import { TabBarIcon } from '../components/molecules';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ focused }) => {
          return {
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: colors.primary,
          };
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return <TabBarIcon focused={focused} name="home" />;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => {
              return <TabBarIcon focused={focused} name="search" />;
            },
          }}
        />
        <Tab.Screen
          name="Location"
          component={Location}
          options={{
            tabBarIcon: ({ focused }) => {
              return <TabBarIcon focused={focused} name="location" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 25,
    overflow: 'hidden',
    left: '5%',
    right: '5%',
    bottom: 5,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    height: height * 0.1,
  },
});
