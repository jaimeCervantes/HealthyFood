import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PublishMaterialIcon from './PublishMaterialIcon';

it('Icon should be visible', () => {
  const view = render(<PublishMaterialIcon></PublishMaterialIcon>);

  const icon = view.getByTestId('svg-icon');

  expect(icon).toBeInTheDocument();
});