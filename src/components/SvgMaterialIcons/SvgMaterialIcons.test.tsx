import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PublishIcon from './PublishMaterialIcon';

it('Icon should be visible', () => {
  const view = render(<PublishIcon></PublishIcon>);

  const svg = view.getByTestId('svg-icon');

  expect(view).toContainElement(svg);
});