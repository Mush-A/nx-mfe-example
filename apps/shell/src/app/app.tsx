import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedUiHeader } from '@govi/shared/ui-header';

const Dashboard = React.lazy(() => import('dashboard/Module'));

const pages = [
  { name: 'shell', link: '/' },
  { name: 'dashboard', link: '/dashboard' }
]

export function App() {
  return (
    <React.Suspense fallback={null}>
      <SharedUiHeader pages={pages} />
      <Routes>
        <Route path="/" element={<h1>Shell App</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
