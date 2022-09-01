import styles from './shared-dashboard-ui-last-value.module.scss';

/* eslint-disable-next-line */
export interface SharedDashboardUiLastValueProps {
  value: number
}

export function SharedDashboardUiLastValue(
  props: SharedDashboardUiLastValueProps
) {
  return (
    <div className={styles['container']}>
      <h1>Last Value</h1>
      <h1>{ props.value + " C"}</h1>
    </div>
  );
}

export default SharedDashboardUiLastValue;
