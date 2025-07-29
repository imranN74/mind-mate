import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";
import { ExpertPage } from "./pages/ExpertPage";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./components/Navbar"; // import your Navbar
import { Route, Routes, useLocation } from "react-router-dom";
import { BlogPage } from "./pages/BlogPage";
import { Footer } from "./components/Footer";
import { BlogDetailPage } from "./pages/BlogDetailsPage";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/experts" element={<ExpertPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

export default App;
