import React, {FunctionComponent} from "react";
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

export type IconProps = {
  name: string;
  color?: 'info' | 'success' | 'warning' | 'danger' | undefined;
  size?: 'small' | 'normal' | 'medium' | 'large' | undefined;
};

export const Icon: FunctionComponent<IconProps> = (props) => {
  const spanClasses = ['icon'];
  const iconClasses = ['fas'];

  if (props.size) {
    spanClasses.push(`is-${props.size}`);
  }

  if (props.color) {
    spanClasses.push(`has-text-${props.color}`)
  }

  iconClasses.push(props.name);

  return (
    <span className={spanClasses.join(' ')}>
      <i className={iconClasses.join(' ')}/>
    </span>
  );
};
