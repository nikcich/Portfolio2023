import './App.css';
import { Flex } from '@chakra-ui/react';
import Header from './Components/Header';
import Background from './Components/Background';
import PageRouter from './Components/PageRouter';
import { createContext, useRef, useState, useEffect } from 'react';
import DragWindow from './Components/DragWindow';

export const PageContext = createContext();

function App() {

  const [page, setPage] = useState('/');
  const [foreground, setForeground] = useState(0);
  const [windows, setWindows] = useState(["hi"]);

  const scrollDiv = useRef();
  const dragConstraints = useRef();


  return (
    <PageContext.Provider value={page}>
      <Flex ref={dragConstraints} p={0} style={{
        overflow: 'hidden', height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0',
        display: 'flex', alignItems: 'center'

      }}
        flexDirection={{ base: 'column', md: 'column', lg: "column", xl: "column" }}
      >

        <Header setPage={setPage} scrollDiv={scrollDiv} currPage={page} />

        <Flex style={{
          overflowX: 'hidden', height: '100%', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center',
          position: 'relative'
        }}
        >
          <Flex ref={scrollDiv} style={{
            overflowX: 'hidden', height: '100%', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center',
            position: 'absolute', top: '0', left: '0',
          }}
          >
            <PageRouter setPage={setPage} setWindows={setWindows} />
          </Flex>
        </Flex>


      </Flex>
      <Background />


      {/* {windows.map((window, idx) => {
        console.log(window);
        return (

          <DragWindow
            dragConstraints={dragConstraints} idx={idx}
            foreground={foreground}
            setForeground={setForeground}
            destroy={
              () => {
                setWindows((old) => {
                  let tmp = old;
                  tmp.splice(idx, 1);
                  return tmp;
                })
              }}
            key={window}
          >
            <iframe src={window} style={{ pointerEvents: 'auto' }} height="100%" width="100%"></iframe>
          </DragWindow>
        )
      })} */}




    </PageContext.Provider>
  );
}

export default App;
