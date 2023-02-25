export interface ITask {
  title: string;
  description: string;
  schedule: string;
  complete: boolean;
}

export interface ITaskResponse {
  id: number;
  title: string;
  description: string;
  schedule: Date;
  complete: boolean;
}

export interface ITaskListResponse {
  id: number;
  name: string;
}

export type ListResponse = {
  id: number
  name: string
}
