import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Dashboard = React.lazy(() => import('dashboard/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Shell</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Shell App</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
