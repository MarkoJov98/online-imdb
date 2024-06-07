import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeScreen from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileScreen from "./pages/Profile";
import Movies from "./pages/Movies";
import Directors from "./pages/Directors";
import SingleMoviePage from "./pages/SingleMovie";
import SingleDirectorPage from "./pages/SingleDirector";

function App() {
  return (
    <Router>
      <main className="container content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<ProfileScreen />} />
          </Route>
          <Route path="/" element={<HomeScreen />} />

          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<SingleMoviePage />} />
          <Route path="/directors" element={<Directors />}/>
          <Route path="/directors/:directorId" element={<SingleDirectorPage />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
