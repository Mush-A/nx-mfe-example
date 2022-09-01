import { render } from '@testing-library/react';

import SharedDashboardUiTimeSeries from './shared-dashboard-ui-time-series';

describe('SharedDashboardUiTimeSeries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedDashboardUiTimeSeries />);
    expect(baseElement).toBeTruthy();
  });
});
