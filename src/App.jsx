import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starred" element={<Start />}></Route>
        <Route path="*" element={<div>No Page Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
