import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import FooterSection from "./components/Footer/FooterSection";
import Team from "./page/about/team/Team";
import Society from "./page/about/society/Society";
import Resources from "./page/resources/Resources";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about/team" element= {<Team/>} />
        <Route path="/about/society" element= {<Society/>} />
        <Route path="/resources" element= {<Resources/>} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
};

export default App;
