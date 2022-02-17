// STYLESHEETS
import "./App.css";
// COMPONENTS
import NavBar from "./components/NavBar";
import Home from "./Home";
// MODULES
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // const [user, setUser] = useState("");
  // setUser("Goro");
  // const user = "Goro"
  const user = null
  return (
    <>
      <div className="App">
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
