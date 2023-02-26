import { CustomButton } from '../../../components/Button/CustomButton';
import React, { useState } from 'react';
import { TextInput } from '../../../components/Input/TextInput';
import { ModalBody } from '../ModalBody';
import { ModalOverlay } from '../ModalOverlay';
import useKey from '../../../hooks/useKey';
import { useTask } from '../../../hooks/useTask';
import { ModalBaseProps } from '../ModalProps';


export const ListModal = ({ open, onClose }: ModalBaseProps) => {
  const [input, setInput] = useState('');

  const { addList } = useTask();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _input = event.target.value;
    setInput(_input);
    console.log(_input);
  };

  const handleSubmit = () => {
    if (input.length > 0) {
      addList(input);
    }
    onClose();
  };

  const cancel = () => {
    // forwardRef to clear text in input
    onClose();
  };

  useKey('Escape', cancel);

  return (
    <ModalOverlay open={open}>
      <ModalBody
        className="bg-neutral-300 dark:bg-neutral-700 absolute p-1 right-10 top-[6em] shadow-md w-[20em] px-2"
      >
        <TextInput
          className="bg-transparent dark:text-slate-50 text-lg"
          type="text"
          required={true}
          placeholder="Create new list"
          onChange={handleInputChange}
        />
        <div className="flex pt-4 pb-2">
          <CustomButton
            text="Cancel"
            className="mx-auto rounded-sm mr-2"
            onClick={cancel}
          />
          <CustomButton
            text="Done"
            className="rounded-sm "
            onClick={handleSubmit}
          />
        </div>
      </ModalBody>
    </ModalOverlay>
  );
};
