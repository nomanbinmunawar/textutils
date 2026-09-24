import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has enabled", "Success");

      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "Success");
    }
  };
  const [alert, setAlert] = useState({ msg: "", type: "", visible: false });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
      visible: true,
    });

    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 2000);

    setTimeout(() => {
      setAlert(null);
    }, 2800); // exit animation time
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="textutils"
          abouttext="about textutils"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} mode={mode} />

        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <Text
                  heading=" Try textutils-Word Counter, Character Counter"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
