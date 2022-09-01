import { render } from '@testing-library/react';

import SharedDashboardUiLastValue from './shared-dashboard-ui-last-value';

describe('SharedDashboardUiLastValue', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedDashboardUiLastValue />);
    expect(baseElement).toBeTruthy();
  });
});
