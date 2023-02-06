import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./Components/Main";
import Navbar from "./Components/Misc/NavBar";

function App() {
  return (
    <div className="App">

      <Router>
        <div id="body">
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        </div>
      </Router>

      <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        </div>
        <span className="visually-hidden">Loading...</span>
      </div>

    </div>
  );
}

export default App;
