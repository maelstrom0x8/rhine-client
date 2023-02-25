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
    setInput('');
    onClose();
  };

  useKey('Escape', cancel);

  return (
    <ModalOverlay open={open}>
      <ModalBody
        header="Add New List"
        className="bg-neutral-300 absolute p-1 right-10 top-16 shadow-md w-[20em] px-2"
      >
        <TextInput
          type="text"
          required={true}
          placeholder=""
          onChange={handleInputChange}
        />
        <div className="py-1">
          <CustomButton
            text="Cancel"
            className="mx-auto p-2 rounded-sm mr-2"
            onClick={cancel}
          />
          <CustomButton
            text="OK"
            className="p-2 px-4 rounded-sm"
            onClick={handleSubmit}
          />
        </div>
      </ModalBody>
    </ModalOverlay>
  );
};

/* 


export function ListModal({ className, isOpen, onClose = () => { } }) {

  const [title, setTitle] = useState("");

  const { addList} = useTask();

  const handleSubmit = () => {
    if (title) {
      addList(title);
      setTitle("");
      onClose();
    }
  };

  const closeModal = () => {
    setTitle("");
    onClose();
  }

  const handleKeyDown = (ev) => {
    switch (ev.key) {
      case "Enter":
        handleSubmit();
        break;
      default:
        break;
    }
  }

  const handleInputChange = (ev) => {
    const { value } = ev.target;
    setTitle(value)
  }

  useKey("Escape", closeModal)


  return (
    <div className={` ${className} ${!isOpen && "hidden"} fixed bg-neutral-500/25 bottom-0 top-0 w-full`}>
      <div className="p-6 bg-white dark:bg-neutral-700 max-sm:w-[90%] absolute bottom-[3.5em] left-[1.2em] rounded-md flex flex-col shadow-lg space-y-2">
        <input type="text"
          className="font-semibold dark:bg-neutral-700"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Create new list"
          autoFocus
        />
        <div className="flex space-x-2">

          <button className="hover:cursor-pointer disabled:text-neutral-400 disabled:cursor-auto font-semibold ml-auto text-blue-500 focus:outline-blue-400 px-1"
            onClick={handleSubmit}
            disabled={title.length < 1}
          >Save</button>
        </div>
      </div>
    </div>
  );
}



*/
