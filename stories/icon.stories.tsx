import {storiesOf} from '@storybook/react';
import * as React from 'react';
import {select, text} from "@storybook/addon-knobs";
import {Icon} from "../src/Icon";

storiesOf("Icon", module)
  .add("Standard", () => (
    <Icon
      name={text('Icon', 'fa-home', 'Icon')}
      size={select('Size', ['small', 'medium', 'large'], undefined, 'Icon')}
      color={select('Color', ['info', 'success', 'warning', 'danger'], undefined, 'Icon')}
    />
  ));
