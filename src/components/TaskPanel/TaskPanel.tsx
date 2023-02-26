import React, {ReactNode} from "react";



type TaskPanelProps = {
  children?: React.ReactNode
  className?: string
}

export const TaskPanel = ({ className, children }: TaskPanelProps) => {
  return (
    <div className={`${className} dark:bg-neutral-700 transition-colors delay-500 duration-500 ease-in-out mx-2 rounded-t-md flex-[3] flex flex-col`}>
      {children}
    </div>
  );
};
