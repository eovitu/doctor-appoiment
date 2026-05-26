import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border: 4px solid red;
  display: flex;
  padding: 64px 24px;
  background-color: #fff;
`;
export const Greetings = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
`;
export const GreetingsTitle = styled.View`
  display: flex;
  gap: 6px;
`;
export const GreetingsSpan = styled.Text`
  font-family: 'Poppins';
  color: #8696bb;
  font-size: 16px;
`;
export const GreetingsText = styled.Text`
  font-family: 'Poppins_700Bold';
  color: #0d1b34;
  font-size: 20px;
  line-height: 22px;
`;
export const GreetingsAvatar = styled.Image`
  width: 56px;
  height: 56px;
`;
