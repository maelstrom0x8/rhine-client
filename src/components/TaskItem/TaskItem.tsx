import { ITask } from "shared/ITask";


export const TaskItem = (props: ITask) => {


    return (
        <div className="p-2 px-4 hover:border-b-4 hover:cursor-default" >
            <div className="flex flex-row items-center">
                <input type="radio"  className="w-4 h-4" />
                <div className="ml-4">
                    <p>{props.title}</p>
                    <p className="text-sm font-light">{props.description}</p>
                    <div>{props.schedule.toString()}</div>
                </div>
            </div>
        </div>
    );
}