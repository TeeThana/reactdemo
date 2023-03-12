// import logo from './assets/images/pokeball.png';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Pokemon Wiki
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
