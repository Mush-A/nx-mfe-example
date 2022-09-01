import { render } from '@testing-library/react';

import FeaturesFeatureDashboard from './features-feature-dashboard';

describe('FeaturesFeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesFeatureDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
