import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home";
import Services from './pages/Services/Services';
import Navbar from './components/Navbar';
import Attendance from './pages/Attendance/Attendance';
import MarkPresent from './components/MarkPresent';

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<Services />} />

          <Route path="/attendance" element={<Attendance/>} />

          <Route path="/add-student" element={<MarkPresent/>} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
