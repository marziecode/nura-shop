import { Route, Routes } from 'react-router-dom';
import './App.css';
import { router } from './routes'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {router?.map((item, idx) => (
          <Route key={idx} path={item.path} element={item.element} />
        ))}
      </Routes>

    </>

  );
}

export default App;
