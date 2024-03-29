import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen ';
import UserLoginScreen from '../screens/UserLoginScreen';
import TrainerLoginScreen from '../screens/TrainerLoginScreen';
import UserDashboardScreen from '../screens/UserDashboardScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  UserLogin: UserLoginScreen,
  TrainerLogin: TrainerLoginScreen,
  UserDashboard: UserDashboardScreen
});

export default createAppContainer(AppNavigator);
