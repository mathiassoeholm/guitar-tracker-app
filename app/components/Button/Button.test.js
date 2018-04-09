import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Text } from 'react-native';

import Button from './index';

describe('List', () => {
  let button;
  let clicked;

  beforeEach(() => {
    clicked = false;
    button = TestRenderer.create(<Button text="My Button" onClick={() => { clicked = true; }} />);
  });

  it('renders', () => {
    expect(button.toJSON()).toBeTruthy();
  });

  it('displays the text', () => {
    expect(button.root.findByType(Text).children[0].children[0]).toBe('My Button');
  });
});
