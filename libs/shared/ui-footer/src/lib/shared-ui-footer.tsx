import styles from './shared-ui-footer.module.scss';

/* eslint-disable-next-line */
export interface SharedUiFooterProps {}

export function SharedUiFooter(props: SharedUiFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUiFooter!</h1>
    </div>
  );
}

export default SharedUiFooter;
