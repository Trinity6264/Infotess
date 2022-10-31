import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-bootstrap/dist/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import FooterSection from "./components/Footer/FooterSection";
import Team from "./page/about/team/Team";
import Society from "./page/about/society/Society";
import Resources from "./page/resources/Resources";
import Gallery from "./page/gallery/Gallery";
import Contact from "./page/contact/Contact";
import Courses from "./page/courses/Courses";
import NotFound from "./page/notFound/NotFound";
import Home from "./page/home/Home";
import ReadMore from "./page/readmore/ReadMore";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ReadMore />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/society" element={<Society />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
};

export default App;
