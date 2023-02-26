import React, { useEffect, useRef, useState } from 'react';
import { CustomButton } from '../../components/Button/CustomButton';
import { ListModal } from '../../components/Modal/ListModal/ListModal';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTask } from '../../hooks/useTask';


export const TaskList = () => {
  const [listModalOpen, setListModalOpen] = useState(false);
  const {list, activeListId, setActiveListId } = useTask();

  const handleElementClick = (key: number) => {
    setActiveListId(key);
  };

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    listRef.current?.scrollBy(listRef.current.scrollWidth, 0);
  }, []);

  return (
    <div className="p-2">
      <div className="pl-2 flex rounded-lg shadow-lg bg-white dark:bg-neutral-600">
        <ul
          ref={listRef}
          className={`list flex space-x-2 p-1 overflow-x-auto scroll-smooth snap-x flex-grow`}
        >
          {list
            .sort((a: any, b: any) => a.id - b.id)
            .map((item, i) => (
              <li
                className={`${
                  activeListId === item.id ? 'focus' : ''
                } hover:cursor-pointer max-sm:text-sm p-2 hover:border-b-4 group snap-start`}
                key={i}
              >
                <div
                  className={`group-focus:font-semibold`}
                  onClick={() => handleElementClick(item.id)}
                >
                  <p className="whitespace-nowrap">{`${item.name}`}</p>
                </div>
              </li>
            ))}
        </ul>

        <CustomButton
          icon={faPlus}
          iconStyle="mr-1"
          text="New List"
          onClick={() => {
            setListModalOpen(true);
          }}
          className="max-w-sm mx-auto rounded-tr-lg rounded-br-lg shrink-0 px-2 items-center bg-neutral-900 hover:border-neutral-600  inline-flex space-x-0 max-sm:text-sm border-neutral-900 dark:border-0 border-[3px]"
        />
      </div>

      <ListModal
        open={listModalOpen}
        onClose={() => {
          setListModalOpen(false);
        }}
      />
    </div>
  );
};
