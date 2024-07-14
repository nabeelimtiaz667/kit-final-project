import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import BlogList from "./pages/BlogList";
import Blog from "./pages/Blog";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

function App() {
  const [user, setUser] = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<Blog />} />
          </>
        ) : (

          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
