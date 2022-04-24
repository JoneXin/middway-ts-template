/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
  username: string;
  phone: string;
  email: string;
}

export enum logsType {
  Info = 'info',
  Error = 'error'
}

// 日志接受格式
export interface LogsContent {
  logsName: string;
  projectName: string;
  time: string;
  filePath: string;
  row: number;
  logsContent: string;
  category: string[];
  type: logsType;
}

export interface LogsCacheData {
  logs_name?: string;
  project_name?: string;
  category?: string;
  time?: string;
  type?: string;
  content?: object[];
}

export interface TreeStrtct {
  label: string;
  attr: string;
  children: TreeStrtct[]
}

export interface LogsData {
  time: string,
  row: number,
  filePath: string,
  logs: any
}

export interface QueryLogsParam {
  project_name: string;
  category: string;
  logs_name: string;
  searchContent?: string;
  start_time?: number;
  end_time?: number;
  rows?: number;
  type: string;
  offset?: number;
  limit?: number
  sort?: number
}