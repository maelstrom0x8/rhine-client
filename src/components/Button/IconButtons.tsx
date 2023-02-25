import {
  faCalendarCheck,
  faPencil
} from '@fortawesome/free-solid-svg-icons';
import { IconButton, IconButtonProps } from './IconButton';

export const BarsStaggerdButton = ({ icon, onClick, iconColor, iconStyle}: IconButtonProps) => {
  return <IconButton className="" icon={icon} onClick={onClick} iconColor={iconColor} iconStyle={iconStyle}/>;
};

export const CalenderCheckButton = ({ icon, onClick, iconColor, iconStyle}: IconButtonProps) => {
  return <IconButton className="" icon={icon} onClick={onClick} iconColor={iconColor} iconStyle={iconStyle}/>;
};

export const AddTaskButton = (props: IconButtonProps) => {
  return (
    <IconButton
      className="bg-blue-700 dark:bg-teal-600/95 transition-colors delay-500 duration-500 ease-in-out p-4 max-w-md mx-auto fixed bottom-[3em] items-center
      right-[3em] z-0 rounded-full w-[4em] h-[4em] hover:bg-blue-500 shadow-md hover:shadow-neutral-700"
      icon={faPencil}
      iconStyle="w-7 h-7 ml-[3px] mt-1"
      iconColor="white"
      onClick={props.onClick}
    />
  );
};
