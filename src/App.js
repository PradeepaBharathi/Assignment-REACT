import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Main from "./nesting/Main";
import Scroll from "./scroll/Scroll";

import Transfer from "./element_transfer/Transfer";
import Game from "./game/Game";
import Infinitesquare from "./InfiniteSquare/Infinitesquare";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}></Route>
          <Route path="/nesting" element={<Main />}></Route>
          <Route path="/scroll" element={<Scroll />}></Route>
          <Route path="/transfer" element={<Transfer />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/infinitesquare" element={<Infinitesquare />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
