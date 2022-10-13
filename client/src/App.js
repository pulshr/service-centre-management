import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Landing,Register,Error,Dashboard} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="*" element={<h1><Error/></h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
