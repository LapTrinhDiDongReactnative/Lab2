import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Two_A, Two_B} from './screens';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="Two_A"
        screenOptions={{
          headerShown: false,
        }}>
        {/*Stack.Screen các thành phần của màn hình  */}
        <Stack.Screen name="Two_A" component={Two_A} />
        <Stack.Screen name="Two_B" component={Two_B} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
