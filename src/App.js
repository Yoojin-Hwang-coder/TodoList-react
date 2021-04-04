import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './componenets/TodoCreate';
import TodoHead from './componenets/TodoHead';
import TodoList from './componenets/TodoList';
import TodoTemplate from './componenets/TodoTemplate';

const GlobalStyle = createGlobalStyle`
body {
  background : #e9ecef 
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
