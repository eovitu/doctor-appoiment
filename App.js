import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Home } from './src/pages/home';
import { SafeAreaView } from 'react-native';


const AppView = styled.SafeAreaView`
flex: 1;`
const Status = styled.StatusBar``
const Title = styled.Text`
font-size: 150;
color:blue;
`

export default function App() {
  return (
    <AppView>
      <Status />
      <Home/>
    </AppView>
  );
}