import { render } from '@testing-library/react';

import Package2 from './package-2';

describe('Package2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Package2 />);
    expect(baseElement).toBeTruthy();
  });
});
