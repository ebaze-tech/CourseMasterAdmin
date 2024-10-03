import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import { AuthProvider } from "./Admin/AuthContext";
import AdminTestView from "./Admin/AdminSubmittedTests";
import TestDetails from "./Admin/AdminTestDetails";
import "./App.css";
import AdminLoginForm from "./Admin/Login";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminRegisterForm from "./Admin/AdminRegister";
import Leaderboard from "./Admin/Leaderboard";
import AdminTestUpload from "./Admin/AdminTestUpload";
import AdminHomePage from "./Admin/AdminHomepage";
import NotFoundPage from "./Admin/404Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/tests" element={<AdminTestView />} />
        <Route path="/admin/tests/:id" element={<TestDetails />} />
        <Route path="/login/admin" element={<AdminLoginForm />} />
        <Route path="/register/admin" element={<AdminRegisterForm />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/admin/leaderboard" element={<Leaderboard />} />
        <Route path="/admin/test/upload" element={<AdminTestUpload />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/" element={<AdminHomePage />} />
      </Routes>
    </Router>
  );
}
export default App;
