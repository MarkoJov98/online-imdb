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
import CreateMovie from "./pages/CreateMovie";
import CreateDirector from "./pages/CreateDirector";
import Navbar from "./components/NavBar";
import EditMoviePage from "./pages/EditMovies";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<ProfileScreen />} />
          </Route>
          <Route path="/" element={<HomeScreen />} />

          <Route path="*" element={<Navigate to="/" replace />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/movies" element={<Movies />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/movies/:movieId" element={<SingleMoviePage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/movies/create" element={<CreateMovie />} />
          </Route>
          <Route path="/edit-movie/:movieId" element={<EditMoviePage />}/>

          <Route element={<ProtectedRoute />}>
            <Route path="/directors" element={<Directors />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/directors/:directorId" element={<SingleDirectorPage />}
            />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/directors/create" element={<CreateDirector />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
