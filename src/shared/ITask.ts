export interface ITask {
  id: number
  title: string;
  description: string;
  schedule: Date;
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
