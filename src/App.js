import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import CaseStudy1Solution from "./pages/CaseStudy1Solution";
import CaseStudy2Impact from "./pages/CaseStudy2Impact";
import CaseStudy2Solution from "./pages/CaseStudy2Solution";
import CaseStudy3Solution from "./pages/CaseStudy3Solution";
import CaseStudy3Solution1 from "./pages/CaseStudy3Solution1";
import CaseStudy3Challenge from "./pages/CaseStudy3Challenge";
import CaseStudy2Challenge from "./pages/CaseStudy2Challenge";
import CaseStudy1Challenge from "./pages/CaseStudy1Challenge";
import CaseStudy1Impact from "./pages/CaseStudy1Impact";
import CaseStudyExample from "./pages/CaseStudyExample";
import FrameComponent from "./pages/FrameComponent";
import FrameComponent1 from "./pages/FrameComponent1";
import FrameComponent2 from "./pages/FrameComponent2";
import SattvaHomePage from "./pages/SattvaHomePage";
import WhySattva from "./pages/WhySattva";
import OurPlatform from "./pages/OurPlatform";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-1-solution":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-2-impact":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-2-solution":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-3-solution1":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-3-solution":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-3-challenge":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-2-challenge":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-1-challenge":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-1-impact":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-example":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6586":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6585":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6587":
        title = "";
        metaDescription = "";
        break;
      case "/sattva-home-page":
        title = "";
        metaDescription = "";
        break;
      case "/why-sattva":
        title = "";
        metaDescription = "";
        break;
      case "/our-platform":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/case-study-1-solution" element={<CaseStudy1Solution />} />
      <Route path="/case-study-2-impact" element={<CaseStudy2Impact />} />
      <Route path="/case-study-2-solution" element={<CaseStudy2Solution />} />
      <Route path="/case-study-3-solution1" element={<CaseStudy3Solution />} />
      <Route path="/case-study-3-solution" element={<CaseStudy3Solution1 />} />
      <Route path="/case-study-3-challenge" element={<CaseStudy3Challenge />} />
      <Route path="/case-study-2-challenge" element={<CaseStudy2Challenge />} />
      <Route path="/case-study-1-challenge" element={<CaseStudy1Challenge />} />
      <Route path="/case-study-1-impact" element={<CaseStudy1Impact />} />
      <Route path="/case-study-example" element={<CaseStudyExample />} />
      <Route path="/frame-6586" element={<FrameComponent />} />
      <Route path="/frame-6585" element={<FrameComponent1 />} />
      <Route path="/frame-6587" element={<FrameComponent2 />} />
      <Route path="/sattva-home-page" element={<SattvaHomePage />} />
      <Route path="/why-sattva" element={<WhySattva />} />
      <Route path="/our-platform" element={<OurPlatform />} />
    </Routes>
  );
}
export default App;
