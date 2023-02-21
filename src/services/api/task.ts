import axios from "axios"
import { ListResponse } from "shared/ITask"



type ITaskListResponse = {
    list: ListResponse[]
}

const fetchTaskLists = (): ITaskListResponse | null => {
    let data: ITaskListResponse | null = null
    axios.get('rhine/api/v1/list')
    .then(res => {data = res.data})

    return data
}