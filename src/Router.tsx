import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Issue from './components/Issue';
import Detail from './components/Issue/Detail';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/issues" />} />
        <Route path="/issues" element={<Issue />} />
        <Route path="/issues/:number" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
