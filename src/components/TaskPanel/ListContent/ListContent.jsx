import useTask from "~/hooks/useTask"
import { TaskItem } from "../TaskItem/TaskItem"



const EmptyList = () => {
    return <div className="p-4">
        <p>Empty List</p>
        <p className="font-light">You can add task to this list.</p>
    </div>
}


export const ListContent = ({ className }) => {
    const { tasks } = useTask();

    return <div className={`${className}`}>
        {
            tasks.length ?
                <div>
                    <ul className="list overflow-y-scroll scroll-smooth snap-y">
                        {tasks.map((task) => <li className="snap-start" key={task.id}><TaskItem {...task} /></li>)}
                    </ul>
                </div>
                : <EmptyList />
        }
    </div>
}