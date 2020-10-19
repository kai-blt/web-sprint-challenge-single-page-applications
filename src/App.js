import React from "react";
import styled from 'styled-components'
import Header from './components/Header'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column nowrap;
  justify-content: center;
  width: 100%;
  margin: auto;
`;


const App = () => {
  return (
    <AppContainer>      
      <Header />
    </AppContainer>
  );
};
export default App;
