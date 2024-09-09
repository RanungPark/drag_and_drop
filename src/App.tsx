import React from 'react';
import styled from 'styled-components';

import DragDropBoard from '@components/DragDropBoard';
import DragDropProvider from '@contexts/DragDropContext';
import GlobalStyles from '@styles/GlobalStyles';

const App = () => {
  return (
    <Layout>
      <Header>MementoAI FrontEnd Assigment (Drop And Drag)</Header>
      <GlobalStyles />
      <DragDropProvider>
        <DragDropBoard />
      </DragDropProvider>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  font-size: xx-large;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.netural_dark};
`;

export default App;
