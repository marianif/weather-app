/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
