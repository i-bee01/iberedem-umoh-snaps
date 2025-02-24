import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Footer from "./components/ComponentName/Footer/Footer.jsx";
import PhotoDetailsPage from "./pages/PhotoDetailsPage/PhotoDetailsPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="app__content">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<PhotoDetailsPage />} path="/photos/:id" />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;



