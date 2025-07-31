import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";
import { ExpertPage } from "./pages/ExpertPage";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./components/Navbar"; // import your Navbar
import { Route, Routes, useLocation } from "react-router-dom";
import { BlogPage } from "./pages/BlogPage";
import { Footer } from "./components/Footer";
import { BlogDetailPage } from "./pages/BlogDetailsPage";
import { ExpertRegForm } from "./pages/ExpertRegPage";

function App() {
  const location = useLocation();
  const hideNavbarPaths = [];
  const hideFooterPaths = ["/login", "/signup", "/expert-registeration"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-dvh">
      {!shouldHideNavbar && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/experts" element={<ExpertPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/expert-registeration" element={<ExpertRegForm />} />
        </Routes>
      </main>

      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default App;
