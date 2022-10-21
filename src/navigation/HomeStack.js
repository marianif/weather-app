import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details } from '../screen';
import { Greetings } from '../components/molecules';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { user } = useSelector(state => state.ui);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitle: () => <Greetings user={user} />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: 'Turin',
          headerTitleAlign: 'center',
          headerTransparent: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
