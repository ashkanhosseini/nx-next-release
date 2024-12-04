import { render } from '@testing-library/react';

import Package1 from './package-1';

describe('Package1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Package1 />);
    expect(baseElement).toBeTruthy();
  });
});
