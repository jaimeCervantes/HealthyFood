import { it, expect } from 'vitest'
import { render } from '@testing-library/react';
import Button from "./Button";


it('Button with children', () => {
  const view = render(<Button><p>I'm children</p></Button>);
  const btn = view.getByTestId('button');

  expect(btn).toHaveTextContent('children');
});

it('Button with before children', async () => {
  const view = render(<Button
    before={<p>I'm before children</p>}
  ></Button>);
  const btn = await view.findByTestId('button');

  expect(btn).toHaveTextContent('before children');
});

it('Button with after children', async () => {
  const view = render(<Button
    after={<p>I'm after children</p>}
  ></Button>);
  const btn = await view.findByTestId('button');

  expect(btn).toHaveTextContent('after children');
});

it('Button with before and after children', async () => {
  const view = render(
    <Button
      before={"I'm before child"}
      after={<p>I'm after child</p>}
    ></Button>
  );
  const btn = await view.findByTestId('button');

  expect(btn).toHaveTextContent('after');
  expect(btn).toHaveTextContent('before');
});
