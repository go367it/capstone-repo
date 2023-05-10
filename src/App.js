import "./App.css";
import Login from "./pages/login-signup/Login";
import NoPage from "./pages/NoPage";
import { Routes, Route } from "react-router-dom";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import TeacherHome from "./pages/teacher/Home/TeacherHome";
import Account from "./pages/teacher/Account/Account";
import TestsSection from "./pages/teacher/Tests/TestsSection";
import TeacherSecurity from "./pages/teacher/Security/TeacherSecurity";
import CreateTests from "./pages/teacher/Create/CreateTests";
import SIgnUp from "./pages/login-signup/SIgnUp";
import MessageContainer from "./components/MessageContainer";
import { MessageProvider } from "./context/MessageContext";

function App() {
  return (
    <div className="App">
      <MessageProvider>
        <MessageContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SIgnUp />} />
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
      </MessageProvider>
    </div>
  );
}

export default App;
