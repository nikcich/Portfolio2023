import './App.css';
import { Flex, useColorMode } from '@chakra-ui/react';
import Header from './Components/Header';
import Background from './Components/Background';
import PageRouter from './Components/PageRouter';
import { createContext, useContext, useState } from 'react';

export const PageContext = createContext();

function App() {

  const [page, setPage] = useState('/');

  return (
    <PageContext.Provider value={page}>
      <Flex p={0} style={{
        overflowX: 'hidden', height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0',
        display: 'flex', alignItems: 'center'

      }}
        flexDirection={{ base: 'column', md: 'column', lg: "column", xl: "column" }}
      >

        <Header setPage={setPage} />

        <Flex style={{
          overflowX: 'hidden', height: '100%', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}

        >
          <PageRouter setPage={setPage} />
        </Flex>


      </Flex>
      <Background />
    </PageContext.Provider>
  );
}

export default App;
