

export const TaskItem = ({ name, description, schedule }) => {


    return (
        <div className="p-2 px-4 hover:border-b-4 hover:cursor-default" >
            <div className="flex flex-row items-center">
                <input type="radio"  className="w-4 h-4" />
                <div className="ml-4">
                    <p>{name}</p>
                    <p className="text-sm font-light">{description}</p>
                    <div>{schedule}</div>
                </div>
            </div>
        </div>
    );
}