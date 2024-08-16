import { Routes, Route } from 'react-router-dom';
import { HomePage, CreateProjectPage, ReportPage, ReportsPage, LoginPage } from '@/pages';

const Router = () => (
  <Routes>
    <Route path="create-project" element={<CreateProjectPage />} />
    <Route path="projects/:projectId">
      <Route path="reports">
        <Route index element={<ReportsPage />} />
        <Route path=":reportId" element={<ReportPage />} />
      </Route>
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default Router;
