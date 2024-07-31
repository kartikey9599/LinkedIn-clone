import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/Login.component";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
