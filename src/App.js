import "./App.css";
import LoginSignup from "./pages/login-signup/LoginSignup";
import NoPage from "./pages/NoPage";
import { Routes, Route } from "react-router-dom";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import TeacherHome from "./pages/teacher/Home/TeacherHome";
import Account from "./pages/teacher/Account/Account";
import TestsSection from "./pages/teacher/Tests/TestsSection";
import TeacherSecurity from "./pages/teacher/Security/TeacherSecurity";
import CreateTests from "./pages/teacher/Create/CreateTests";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/teacher/*" element={<TeacherDashboard />}>
          <Route path="home" element={<TeacherHome />} />
          <Route path="account" element={<Account />} />
          <Route path="tests" element={<TestsSection />} />
          <Route path="security" element={<TeacherSecurity />} />
          <Route path="create" element={<CreateTests />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
