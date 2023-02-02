import "./App.css";
import AddStudent from "./components/AddStudent";
import Header from "./components/Header";
import AllStudents from "./components/AllStudents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<AllStudents />} />
        <Route exact path="/add" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
