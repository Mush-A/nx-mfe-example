import styles from './shared-dashboard-ui-time-series.module.scss';

/* eslint-disable-next-line */
export interface SharedDashboardUiTimeSeriesProps {}

export function SharedDashboardUiTimeSeries(
  props: SharedDashboardUiTimeSeriesProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedDashboardUiTimeSeries!</h1>
    </div>
  );
}

export default SharedDashboardUiTimeSeries;
