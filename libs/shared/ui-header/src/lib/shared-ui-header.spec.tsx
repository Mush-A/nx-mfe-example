import { render } from '@testing-library/react';

import SharedUiHeader from './shared-ui-header';

describe('SharedUiHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
