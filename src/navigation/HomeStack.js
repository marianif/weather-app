import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details } from '../screen';
import { Greetings } from '../components/molecules';
import { colors } from '../theme';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
          headerTitle: () => <Greetings user={user} />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: route.params.city,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'open-sans',
            fontSize: 28,
            fontWeight: 'bold',
          },
          headerTransparent: true,
          headerTintColor: 'white',
          headerRight: () => (
            <Icon name="plus-square" size={28} color={'white'} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
