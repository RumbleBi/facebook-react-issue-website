import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import IssueListPage from './pages/IssueList';
import IssueDetailPage from './pages/IssueDetail';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/issues" />} />
        <Route path="/issues" element={<IssueListPage />} />
        <Route path="/issues/:number" element={<IssueDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
