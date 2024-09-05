import Board from '@components/Board';
import GlobalStyles from '@styles/GlobalStyles';
import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <Layout>
      <Header>MementoAI FrontEnd Assigment (Drop And Drag)</Header>
      <GlobalStyles />
      <Board />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  font-size: xx-large;
`;

export default App;
