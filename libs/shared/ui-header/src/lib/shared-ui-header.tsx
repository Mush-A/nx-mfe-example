import styles from './shared-ui-header.module.scss';

import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SharedUiHeaderProps {
  pages: Array<{
    link: string,
    name: string
  }>
}

export function SharedUiHeader(props: SharedUiHeaderProps) {
  return (
    <div className={styles['container']}>
      <ul>
        {
          props.pages.map(page => {
            return <li>
                <Link to={page.link}>
                  {page.name}
                </Link>
              </li>
          })
        }
      </ul>
    </div>
  );
}

export default SharedUiHeader;
