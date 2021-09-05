import React from 'react';
import styled from 'styled-components';

import List from './components/List';

const Wrapper = styled.section`
  width: 100%:
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #f0f2f5;
`

const Header = styled.header`
  padding: 0 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001529;
  color: white;
  font-size: 20px;
  font-weight: bold;
  line-height: 64px;
`

const Main = styled.main`
  padding-top: 10px;
  width: 400px;
  display: flex;
  justify-content: start;
  background-color: white;
  overflow: auto;
`

const App = () => {
  return (
    <Wrapper>
      <Header>Digital Habits. Entrance test</Header>
      <Main>
        <List id={0} />
      </Main>
    </Wrapper>
  );
}

export default App;
