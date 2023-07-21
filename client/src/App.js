import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import History from "./page/History";
import Email from "./page/Email";

import Hero from "./page/Hero"

// import "./App.css";
// import Appp from './function/test.js'

function App() {
  return (
    <div>
      {/* <LineChart/> */}
      {/* <Home/> */}
      {/* <History/> */}
      {/* <Email/> */}
      {/* <Appp/> */}
      {/* <SelectedOption/> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/overview" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/email" element={<Email />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;