import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";

import PlatformAdminDashboard from "./pages/Dashboards/PlatformAdmin/PlatformAdminDashboard";
import CollegeAdminDashboard from "./pages/Dashboards/CollegeAdmin/CollegeAdminDashboard";

import CoordinatorDashboard from "./pages/Dashboards/Coordinator/CoordinatorDashboard";
import CreateExamination from "./pages/Dashboards/Coordinator/CreateExamination";
import AddQuestions from "./pages/Dashboards/Coordinator/AddQuestions";
import PublishExamination from "./pages/Dashboards/Coordinator/PublishExamination";

import StudentDashboard from "./pages/Dashboards/Student/StudentDashboard";
import MyExaminations from "./pages/Dashboards/Student/MyExaminations";
import ExamInstructions from "./pages/Dashboards/Student/ExamInstructions";
import TakeExam from "./pages/Dashboards/Student/TakeExam";
import ExamResult from "./pages/Dashboards/Student/ExamResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Platform Admin */}
        <Route
          path="/platform-admin"
          element={<PlatformAdminDashboard />}
        />

        {/* Organization Admin */}
        <Route
          path="/organization"
          element={<CollegeAdminDashboard />}
        />

        {/* Coordinator */}
        <Route
          path="/coordinator"
          element={<CoordinatorDashboard />}
        />

        <Route
          path="/coordinator/create-examination"
          element={<CreateExamination />}
        />

        <Route
          path="/coordinator/add-questions"
          element={<AddQuestions />}
        />

        <Route
          path="/coordinator/publish-examination"
          element={<PublishExamination />}
        />

        {/* Student */}
        <Route
          path="/student"
          element={<StudentDashboard />}
        />

        <Route
          path="/student/examinations"
          element={<MyExaminations />}
        />

        <Route
          path="/student/exam-instructions"
          element={<ExamInstructions />}
        />

        <Route
          path="/student/exam"
          element={<TakeExam />}
        />

        <Route
          path="/student/exam-result"
          element={<ExamResult />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;