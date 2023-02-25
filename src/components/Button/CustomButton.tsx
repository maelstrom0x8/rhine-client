import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type CustomButtonProps = {
  icon?: IconDefinition;
  onClick: () => void;
  text?: string;
  className?: string;
  iconColor?: string;
  iconStyle?: string;
};
const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      className={`${props.className} px-2 bg-neutral-900 dark:bg-neutral-200/80 dark:text-black text-neutral-50 hover:border-neutral-600 hover:cursor-pointer`}
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        icon={props.icon}
        color={props.iconColor}
        className={props.iconStyle}
      />
      {props.text}
    </button>
  );
};

export { CustomButton };
