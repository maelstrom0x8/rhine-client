import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IconButtonProps = {
  icon: IconDefinition;
  onClick: () => void;
  text?: string;
  className?: string;
  iconColor?: string;
  iconStyle?: string;
};

export const IconButton = (props: IconButtonProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <FontAwesomeIcon
        icon={props.icon}
        color={props.iconColor}
        className={props.iconStyle}
      />
      {props.text}
    </button>
  );
};
