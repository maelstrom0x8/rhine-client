import { useTask } from '../../hooks/useTask';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { ITask, ITaskListResponse } from 'shared/ITask';

type ListProps = {
  children? : React.ReactNode
  className?: string
}

export const TaskList = (props: ListProps) => {
  const { list, activeListId, setActiveListId } = useTask();

  const handleElementClick = (key: number) => {
    setActiveListId(key);
  };

  const listRef = useRef<any>();

  useEffect(() => {
    listRef.current.scrollBy(listRef.current.scrollWidth, 0);
  }, []);

  return (
    <div>
      <div className="flex flex-row rounded-t-sm shadow-lg">
        <ul
          ref={listRef}
          className={`list flex list-none space-x-2 p-1 overflow-x-auto scroll-smooth snap-x`}
        >
          {list
            .sort((a: any, b: any) => a.id - b.id)
            .map((item, i) => (
              <li
                className={`${
                  activeListId === item.id ? 'focus' : ''
                } hover:cursor-pointer min-w-fit max-sm:text-sm p-2 hover:border-b-4 dark:hover:border-blue-400/25 group snap-start`}
                key={i}
              >
                <div onClick={() => handleElementClick(item.id)}>
                  {`${item.name}`}
                </div>
              </li>
            ))}
        </ul>
        {props.children}
      </div>
    </div>
  );
};
