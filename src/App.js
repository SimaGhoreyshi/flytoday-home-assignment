import './App.css';
import { MainLayout } from './components/layouts';
import { React } from 'react';
import { GlobalStyle } from './assets';
import { AirplaneResult } from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainLayout  >
        {/* caution: normally here would be the router, not a page component itself,
        but since there's no routing needed I added the component itself */}
        <AirplaneResult />
      </MainLayout>
    </>
  );
}

export default App;
