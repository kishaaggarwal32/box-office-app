import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/starred" element={<Start />}></Route>
        </Route>
        <Route path="/show/:showId" element={<Show />} />

        <Route path="*" element={<div>No Page Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
