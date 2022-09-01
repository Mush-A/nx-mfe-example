// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { SharedDashboardUiLastValue } from '@govi/shared/dashboard/ui-last-value';

export function App() {
  return (
    <>
      <h1>Dashboard</h1>
      <SharedDashboardUiLastValue value={12} />
    </>
  );
}

export default App;
