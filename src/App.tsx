import { Outlet } from 'react-router-dom';
import FallSnow from './components/FallSnow';
import ScrollRestoration from './components/ScrollRestoration';
import './App.css';

function App() {
  const date = new Date();
  const showSnow =
    date.getMonth() === 11 || (date.getMonth() === 0 && date.getDate() <= 10);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
      {showSnow && <FallSnow />}
    </>
  );
}

export default App;
