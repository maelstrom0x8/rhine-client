import {
  faBarsStaggered,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';
import { CustomButton } from '../../../components/Button/CustomButton';
import React, { useState } from 'react';

import { ITask } from 'shared/ITask';
import {
  BarsStaggerdButton,
  CalenderCheckButton,
} from '../../../components/Button/IconButtons';
import { TextInput } from '../../../components/Input/TextInput';
import useKey from '../../../hooks/useKey';
import { useTask } from '../../../hooks/useTask';
import { ModalBody } from '../ModalBody';
import { ModalOverlay } from '../ModalOverlay';
import { ModalBaseProps } from '../ModalProps';

export const TaskModal = ({ open, onClose }: ModalBaseProps) => {
  const { addTask } = useTask();
  const [task, setTask] = useState<ITask>({
    title: '',
    description: '',
    schedule: ''
  });

  const [showDetails, setShowDetails] = useState(false);

  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setShowDetails(false);
    setTask({
      title: '',
      description: '',
      schedule: '',
    });
    onClose();
  };

  const handleSave = () => {
    addTask(task);
    handleClose();
  };

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    switch (ev.key) {
      case 'Enter':
        handleSave();
        break;
      default:
        break;
    }
  };

  useKey('Escape', handleClose);

  return (
    <ModalOverlay open={open}>
      <ModalBody className="bg-neutral-300 dark:bg-neutral-700 absolute p-3 shadow-md bottom-[16em] left-[1.8em] right-[1.8em]">
        <TextInput
          className="bg-transparent dark:bg-transparent dark:text-neutral-50"
          placeholder="New task"
          type="text"
          required={true}
          value={task.title}
          name="title"
          onChange={handleInputChange}
        />
        <TextInput
          placeholder="Add description"
          type="text"
          required={true}
          value={task.description}
          name="description"
          onChange={handleInputChange}
          className={`${
            !showDetails && 'hidden'
          } bg-transparent dark:bg-transparent dark:text-neutral-50 text-xs`}
        />
        <div className="flex space-x-3 pt-1 ml-1 mt-4 flex-row">
          <BarsStaggerdButton
            icon={faBarsStaggered}
            onClick={() => setShowDetails(true)}
            iconStyle="w-5 h-5"
          />
          <CalenderCheckButton
            icon={faCalendarCheck}
            onClick={() => {}}
            iconStyle="w-5 h-5"
          />
          <CustomButton
            text="Cancel"
            className="p-1 rounded-sm bg-white"
            onClick={handleClose}
          />
          <CustomButton
            text="Save"
            className="p-1 rounded-sm bg-white"
            onClick={handleSave}
          />
        </div>
      </ModalBody>
    </ModalOverlay>
  );
};
