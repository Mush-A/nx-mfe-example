import styles from './features-feature-dashboard.module.scss';

import { SharedDashboardUiLastValue } from '@govi/shared/dashboard/ui-last-value';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface FeaturesFeatureDashboardProps {}

export function FeaturesFeatureDashboard(props: FeaturesFeatureDashboardProps) {
 
  useEffect(() => {
    //
  })

  return (
    <div className={styles['container']}>
      <h1>Dashboard</h1>
      <SharedDashboardUiLastValue value={12} />
    </div>
  );
}

export default FeaturesFeatureDashboard;
