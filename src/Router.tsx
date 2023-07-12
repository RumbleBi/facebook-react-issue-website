import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Issue from './components/Issue';
import Detail from './components/Issue/Detail';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/issue" />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/issue/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
