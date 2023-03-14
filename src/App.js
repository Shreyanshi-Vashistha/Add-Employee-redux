import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import AddEmp from './components/AddEmp';

function App() {
  return (

    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="add" element={<AddEmp />} />
      </Routes>
    </div>

  );
}

export default App;
