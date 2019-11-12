import {storiesOf} from '@storybook/react';
import * as React from 'react';
import {Button} from "../src/Button";
import {boolean, select, text} from "@storybook/addon-knobs";
import {Icon} from "../src/Icon";

storiesOf("Button", module)
  .add("Standard", () => (
    <Button
      color={select('Color', ['white', 'primary', 'success'], undefined, 'Button')}
      size={select('Size', ['small', 'normal', 'medium', 'large'], undefined, 'Button')}
      fullwidth={boolean('Full Width', false, 'Button')}
      inverted={boolean('Inverted', false, 'Button')}
      outlined={boolean('Outline', false, 'Button')}
      rounded={boolean('Rounded', false, 'Button')}
    >
      {text('Text', 'Button Text', 'Button')}
    </Button>
  ))
  .add("Icon only", () => (
    <Button
      color={select('Color', ['white', 'primary', 'success'], undefined, 'Button')}
      size={select('Size', ['small', 'normal', 'medium', 'large'], undefined, 'Button')}
      fullwidth={boolean('Full Width', false, 'Button')}
      inverted={boolean('Inverted', false, 'Button')}
      outlined={boolean('Outline', false, 'Button')}
      rounded={boolean('Rounded', false, 'Button')}
    >
      <Icon
        name={text('Icon', 'fa-home', 'Icon')}
        size={select('Size', ['small', 'medium', 'large'], undefined, 'Icon')}
        color={select('Color', ['info', 'success', 'warning', 'danger'], undefined, 'Icon')}
      />
    </Button>
  ))
  .add("Icon left with text", () => (
    <Button
      color={select('Color', ['white', 'primary', 'success'], undefined, 'Button')}
      size={select('Size', ['small', 'normal', 'medium', 'large'], undefined, 'Button')}
      fullwidth={boolean('Full Width', false, 'Button')}
      inverted={boolean('Inverted', false, 'Button')}
      outlined={boolean('Outline', false, 'Button')}
      rounded={boolean('Rounded', false, 'Button')}
    >
      <Icon
        name={text('Icon', 'fa-home', 'Icon')}
        size={select('Size', ['small', 'medium', 'large'], undefined, 'Icon')}
        color={select('Color', ['info', 'success', 'warning', 'danger'], undefined, 'Icon')}
      />
      <span>{text('Text', 'Button Text', 'Button')}</span>
    </Button>
  ))
  .add("Icon right with text", () => (
    <Button
      color={select('Color', ['white', 'primary', 'success'], undefined, 'Button')}
      size={select('Size', ['small', 'normal', 'medium', 'large'], undefined, 'Button')}
      fullwidth={boolean('Full Width', false, 'Button')}
      inverted={boolean('Inverted', false, 'Button')}
      outlined={boolean('Outline', false, 'Button')}
      rounded={boolean('Rounded', false, 'Button')}
    >
      <span>{text('Text', 'Button Text', 'Button')}</span>
      <Icon
        name={text('Icon', 'fa-home', 'Icon')}
        size={select('Size', ['small', 'medium', 'large'], undefined, 'Icon')}
        color={select('Color', ['info', 'success', 'warning', 'danger'], undefined, 'Icon')}
      />
    </Button>
  ))
  .add("Two icons with text", () => (
    <Button
      color={select('Color', ['white', 'primary', 'success'], undefined, 'Button')}
      size={select('Size', ['small', 'normal', 'medium', 'large'], undefined, 'Button')}
      fullwidth={boolean('Full Width', false, 'Button')}
      inverted={boolean('Inverted', false, 'Button')}
      outlined={boolean('Outline', false, 'Button')}
      rounded={boolean('Rounded', false, 'Button')}
    >
      <Icon
        name={text('Icon', 'fa-home', 'Icon')}
        size={select('Size', ['small', 'medium', 'large'], undefined, 'Icon')}
        color={select('Color', ['info', 'success', 'warning', 'danger'], undefined, 'Icon')}
      />
      <span>{text('Text', 'Button Text', 'Button')}</span>
      <Icon
        name={text('Icon', 'fa-home', 'Icon')}
        size={select('Size', ['small', 'medium', 'large'], undefined, 'Icon')}
        color={select('Color', ['info', 'success', 'warning', 'danger'], undefined, 'Icon')}
      />
    </Button>
  ));
