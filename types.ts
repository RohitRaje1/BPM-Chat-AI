
export enum MessageSender {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: MessageSender;
  senderName: string;
}

export enum TaskStatus {
  COMPLETED = 'Completed',
  IN_PROGRESS = 'In Progress',
  BLOCKED = 'Blocked',
  NOT_STARTED = 'Not Started',
}

export interface Task {
  id: string;
  name: string;
  assignee: string;
  status: TaskStatus;
  startDate: string;
  endDate?: string;
  details: string;
}

export interface ProcessData {
  serviceId: string;
  processName: string;
  status: 'Active' | 'Completed' | 'Failed';
  currentTask: string;
  tasks: Task[];
}
