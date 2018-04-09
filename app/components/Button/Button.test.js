import React from 'react';
import TestRenderer from 'react-test-renderer';

import Button from './index';

describe('List', () => {
  let button;

  beforeEach(() => {
    button = TestRenderer.create(<Button text="My Button" />);
  });

  it('renders', () => {
    expect(button.toJSON()).toBeTruthy();
  });
});
