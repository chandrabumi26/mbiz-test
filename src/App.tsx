import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import CopyRight from "./components/Copyright";
import FloatingButton from "./components/FloatingButton";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <Footer></Footer>
      <CopyRight></CopyRight>
      <FloatingButton></FloatingButton>
    </div>
  );
}

export default App;
