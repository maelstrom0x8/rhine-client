import { ButtonProps } from './ButtonProps';

const CustomButton = (props: ButtonProps) => {
  return (
    <button
      className="max-w-sm shrink-0 px-2 items-center bg-neutral-900 dark:bg-neutral-200/80 dark:text-black text-neutral-50 hover:border-neutral-600 hover:cursor-pointer inline-flex space-x-0 max-sm:text-sm mr-auto p-4"
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};

export { CustomButton };
