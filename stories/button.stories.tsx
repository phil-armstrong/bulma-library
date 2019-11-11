import {storiesOf} from '@storybook/react';
import * as React from 'react';
import {Button} from "../src/Button";

storiesOf("Button", module)
  .add("with text", () => (
    <Button>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button styles={{backgroundColor: 'red', color: 'darkRed',}}>😀 😎 👍 💯</Button>
  ));
