import React, {FunctionComponent} from "react";
import 'bulma/css/bulma.css';

export type ButtonProps = {
  color?: 'white' | 'primary' | 'success' | undefined;
  size?: 'small' | 'normal' | 'medium' | 'large' | undefined;
  fullwidth?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  label?: string;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const classes = ['button'];
  if (props.color) {
    classes.push(`is-${props.color}`);
  }

  if (props.size) {
    classes.push(`is-${props.size}`);
  }

  if (props.fullwidth) {
    classes.push('is-fullwidth');
  }

  if (props.outlined) {
    classes.push('is-outlined');
  }

  if (props.inverted) {
    classes.push('is-inverted');
  }

  if (props.rounded) {
    classes.push('is-rounded');
  }

  return (
    <button className={classes.join(' ')}>
      {props.children}
    </button>
  );
};
